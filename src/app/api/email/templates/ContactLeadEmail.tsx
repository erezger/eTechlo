// src/lib/emailTemplate.ts

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const getContactLeadEmail = ({ name, email, phone, message }: LeadData): string => {
  const firstName = name.split(" ")[0];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>ליד חדש מ-etechlo.com</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
    .header { background: #1e40af; color: white; padding: 40px; text-align: center; }
    .header img { height: 60px; }
    .body { padding: 40px; line-height: 1.7; color: #1e293b; }
    .info { background: #f1f5f9; padding: 20px; border-radius: 12px; margin: 20px 0; }
    .message { background: #fffbeb; padding: 20px; border-radius: 8px; border-left: 5px solid #f59e0b; margin: 25px 0; }
    .btn { display: inline-block; background: #1e40af; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 20px; }
    .footer { background: #f8fafc; padding: 30px; text-align: center; color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.etechlo.com/logo-white.png" alt="eTechlo" />
      <h1 style="margin: 20px 0 0; font-size: 28px;">ליד חדש הגיע!</h1>
    </div>

    <div class="body">
      <p>יש לך פנייה חדשה דרך טופס יצירת הקשר:</p>

      <div class="info">
        <p><strong>שם:</strong> ${name}</p>
        <p><strong>אימייל:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p><strong>טלפון:</strong> ${phone}</p>` : ""}
      </div>

      <div class="message">
        <strong>ההודעה:</strong><br><br>
        ${message.replace(/\n/g, "<br>")}
      </div>

      <div style="text-align: center;">
        <a href="mailto:${email}?subject=Re: פנייתך מאתר eTechlo&body=שלום ${firstName},%0D%0A%0D%0Aתודה על פנייתך! אני חוזר אליך בהקדם.%0D%0A%0D%0Aבברכה," class="btn">
          השב עכשיו ל-${firstName}
        </a>
      </div>

      <p style="margin-top: 30px; color: #64748b;">
        נשלח בתאריך: ${new Date().toLocaleString("he-IL")}
      </p>
    </div>

    <div class="footer">
      נשלח אוטומטית מ-<strong>etechlo.com</strong> • © ${new Date().getFullYear()}
    </div>
  </div>
</body>
</html>
  `.trim();
};