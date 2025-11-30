import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.etechlo.com'; // שנה לכתובת הדומיין שלך!

  return [
    {
      url: baseUrl, // זהו ה-URL היחיד שגוגל צריך לאנדקס
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1, // הגדרת עדיפות גבוהה לדף הראשי
    },
    // אין צורך להוסיף כאן את /#about או /#contactus
  ];
}
