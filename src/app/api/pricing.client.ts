import { apiClient } from './client';

// טיפוס נתונים בסיסי לחבילות תמחור
export interface PricingPackage {
  id: number;
  packageName_he: string;
  packageName_en: string;
  price_min: number;
  description_he: string;
  description_en: string;
  isFeatured: boolean;
}

/**
* משיכת חבילות התמחור הראשיות (isFeatured: true).
*/
export async function getFeaturedPackages(): Promise<PricingPackage[]> {
  try {
    // GET /pricing
    const response = await apiClient.get('/pricing');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch pricing packages:', error);
    // במקרה של כשל ב-API (500, 503), נחזיר מערך ריק או נזרוק שגיאה
    // לצורך יציבות, עדיף להחזיר מערך ריק במקום לקרוס את ה-Frontend
    return [];
  }
}