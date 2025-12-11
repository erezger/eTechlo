import { apiClient } from './client';

export interface Testimonial {
  id: number;
  clientName_he: string;
  clientName_en: string | null;
  clientTitle_he: string | null;
  clientTitle_en: string | null;
  company_he: string | null;
  company_en: string | null;
  quote_he: string;
  quote_en: string;
  isApproved: boolean;
}

/**
 * משיכת רשימה של עדויות לקוח (Testimonials).
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    // GET /testimonials
    const response = await apiClient.get('/testimonials');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
}