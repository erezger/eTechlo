import { redirect } from 'next/navigation';
// --- מחק את השורה הבאה: import { use } from 'react';
import type { Metadata } from 'next';
import { getPostBySlug } from '@/app/api/posts.client';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { getTranslations } from 'next-intl/server';

// 1. generateMetadata - קורא ל-API
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // קורא לפוסט: אם 404, הפונקציה תחזיר null, ואז נחזיר Metadata ריקה
  const t = await getTranslations('blogSection'); // טוען את הטקסט הסטטי
  const { slug } = await params
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: t('notFound') }; // מחזירים אובייקט ריק כדי לא לקרוס
  }
  // בחירת השדה הדינמי לפי השפה:
  // נניח שאתה מקבל את ה-locale דרך ה-params או ה-cookies אם זה לא דף שפה ייעודי
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const locale = (params as any).locale || 'he';
  const titleKey = locale === 'en' ? 'title_en' : 'title_he';
  const title = post[titleKey] || post.title_he; // מחזיר עברית כברירת מחדל

  // **הערה:** הנחתי ש-content_he משמש ל-description
  return {
    title: title + ' | eTechlo Blog',
    description: post.content_he.substring(0, 160),
    alternates: {
      canonical: `https://www.etechlo.com/blog/${slug}`,
    },
  };
}

// 3. הקומפוננטה הראשית שמציגה את המאמר (מתוקנת)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPostPage(props: any) {
  // ניגשים ל-params בבטחה:
  const params = props.params as { slug: string };
  const { slug } = await params
  const post = await getPostBySlug(slug);

  if (!post) {
    redirect('/blog');
  }

  return (
    <BlogPostContent post={post}></BlogPostContent>
  );
}