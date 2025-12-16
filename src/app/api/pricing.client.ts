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
 * משיכת חבילות תמחור.
 * @param featuredOnly - אם true, שולף רק חבילות מומלצות.
 */
export async function getPricingPackages(featuredOnly: boolean = false): Promise<PricingPackage[]> {
  let url = '/pricing';

  if (featuredOnly) {
    // אם featuredOnly=true, שולח את פרמטר ה-Query
    url = '/pricing?featured=true';
  }

  const response = await apiClient.get(url);
  return response.data;
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