import axios, { AxiosError, AxiosInstance } from 'axios';

// כתובת ה-Backend הציבורית שלך ב-Vercel
// מומלץ להשתמש במשתנה סביבה כאן (.env.local)
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://your-backend-url.vercel.app';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // 15 שניות
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // קריטי! שולח cookies/credentials
});

// אנו יכולים להוסיף כאן Interceptors לטיפול אוטומטי ב-JWT אם יהיה צורך בעתיד.
// =======================================================
// INTERCEPTOR: טיפול גלובלי בשגיאות (4xx, 5xx)
// =======================================================

apiClient.interceptors.response.use(
  // 1. תגובה מוצלחת (2xx): פשוט מחזירים את התגובה
  (response) => response,

  // 2. תגובה כושלת (4xx, 5xx): מטפלים בשגיאה
  (error: AxiosError) => {
    // אם אין תגובה מהשרת (כמו Timeout או כשל רשת)
    if (!error.response) {
      throw new Error('שגיאת רשת: השרת לא הגיב בזמן.');
    }

    const statusCode = error.response.status;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const serverData = error.response.data as any;

    let errorMessage: string;

    // הטיפול בשגיאות מה-Backend (הפורמט שעיצבנו ב-AllExceptionsFilter)
    if (serverData && serverData.message) {
      // שגיאות לוגיות: 400 (Validation), 409 (Conflict), 404
      errorMessage = serverData.message;
    } else if (statusCode === 429) {
      // 429 Too Many Requests מגיע מה-Throttler
      errorMessage = 'נשלחו יותר מדי בקשות. אנא נסה שוב בעוד דקה.';
    } else {
      // 500 או שגיאה לא ידועה
      errorMessage = 'אירעה שגיאת שרת לא צפויה. אנא נסה שוב מאוחר יותר.';
    }

    // זורקים שגיאה עם ההודעה המדויקת שנאספה
    throw new Error(errorMessage);
  }
);