// src/lib/emailTemplate.ts  (תוסיף למטה, מתחת לפונקציה הקודמת)

export const getConfirmationEmail = ({ name }: { name: string }): string => {
  const firstName = name.split(" ")[0];

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>תודה שפנית אלינו – eTechlo</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f8fafc; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
    .header { background: #1e40af; color: white; padding: 50px 30px; text-align: center; }
    }
    .header img { height: 60px; margin-bottom: 20px; }
    .body { padding: 50px 40px; line-height: 1.8; color: #1e293b; text-align: center; }
    .highlight { background: #eff6ff; padding: 25px; border-radius: 12px; margin: 30px 0; border: 1px solid #dbeafe; }
    .footer { background: #f8fafc; padding: 30px; text-align: center; color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://www.etechlo.com/logo-white.png" alt="eTechlo" />
      <h1 style="margin: 0; font-size: 32px;">קיבלנו את הפנייה שלך!</h1>
    </div>

    <div class="body">
      <p style="font-size: 20px;">היי ${firstName},</p>
      
      <div class="highlight">
        <p style="font-size: 18px; margin: 0;">
          תודה רבה שפנית אלינו! ההודעה שלך התקבלה בהצלחה.
        </p>
      </div>

      <p style="font-size: 17px;">
        אני חוזר אליך ממש בקרוב – תוך 24 שעות לכל היותר.<br>
        בינתיים אפשר לעקוב אחריי גם בלינקדאין
      </p>

      <p>
        <a href="https://www.linkedin.com/in/your-profile" 
           style="background:#0077b5; color:white; padding:14px 28px; border-radius:8px; text-decoration:none; font-weight:bold;">
          להתחבר בלינקדאין
        </a>
      </p>

      <p style="margin-top: 40px; color: #64748b;">
        מחכה כבר לעבוד איתך,<br>
        <strong>איתי – eTechlo</strong>
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