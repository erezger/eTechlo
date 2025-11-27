import { sendEmail } from '@/lib/emailService';
import { NextResponse } from 'next/server';
import { getContactLeadEmail } from './templates/ContactLeadEmail';
import { getConfirmationEmail } from './templates/ContactConfirmationEmail';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // 1. מייל אליך
    const result = await sendEmail({
      to: "info@etechlo.com",
      from: "eTechlo <info@etechlo.com>",
      subject: `ליד חדש – ${name} ${phone ? `(${phone})` : ""}`,
      html: getContactLeadEmail({ name, email, phone, message }),
    });

    // 2. אישור אוטומטי ללקוח – זהב!
    await sendEmail({
      to: email,
      from: "eTechlo <info@etechlo.com>",
      subject: `קיבלנו את הפנייה שלך, ${name.split(" ")[0]}! 🚀`,
      html: getConfirmationEmail({ name }),
    });

    return result.success
      ? NextResponse.json({ success: true })
      : NextResponse.json({ success: false }, { status: 500 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}