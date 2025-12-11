import { apiClient } from './client';
// נשתמש ב-DTOs פנימיים כדי לשמור על מבנה הנתונים נקי
export interface QuoteRequest {
  fullName: string;
  email: string;
  phone?: string;
  // כל שאר השדות מה-QuoteSubmissionDto...
  projectType: string;
  scale: string;
  integration: string;
  includesComplexLogic: boolean;
  timeline: string;
  includesSite?: boolean;
  includesBackOffice?: boolean;
  includesConsultingHours?: boolean;
  projectDescription?: string;
}

export interface QuoteResult {
  leadId: number;
  score: number;
  priceEstimate: {
    min: number; // estimatedPriceMin
    max: number; // estimatedPriceMax
    basePrice: number; // baseOptimalPrice
  };
  message: string; // "הערכת טווח מחיר: ₪X - ₪Y (מבוסס על כ-₪Z)"
}

/**
 * שליחת נתוני השאלון וקבלת הצעת מחיר משוערת.
 */
export async function submitQuoteRequest(data: QuoteRequest): Promise<QuoteResult> {
  // POST /quoting

  // אנו לא צריכים בלוק try/catch גדול, כי ה-Interceptor תופס את השגיאה
  // ומחזיר לנו רק 'throw new Error(message)'.
  const response = await apiClient.post('/quoting', data);
  return response.data; // ה-data מכיל את ה-QuoteResult
}