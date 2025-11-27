import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface SendEmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ from, to, subject, html }: SendEmailOptions) {
  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return {
      success: true as const,
      result,
    };
  } catch (error: any) {
    return {
      success: false as const,
      error,
    };
  }
}
