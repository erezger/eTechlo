import axios from 'axios';
import { apiClient } from './client';

export interface Post {
  id: number;
  slug: string;
  title_he: string;
  title_en: string | null;
  content_he: string;
  isPublished: boolean;
  createdAt: string;
}

/**
 * משיכת רשימה של פוסטים מהבלוג.
 */
export async function getPostList(): Promise<Post[]> {
  // GET /posts
  const response = await apiClient.get('/posts');
  return response.data;
}

/**
 * משיכת פוסט בודד לפי ID.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // GET /posts/:id
    const response = await apiClient.get(`/posts/${slug}`);
    return response.data;
  } catch (error) {
    // אם ה-Backend מחזיר 404, תהיה כאן שגיאה. נחזיר null.
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return null;
    }
    // זורקים שוב כדי ש-React Query יטפל ב-500, רשת וכו'.
    throw error;
  }
}