'use client'
// --- מחק את השורה הבאה: import { use } from 'react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { Post } from '@/app/api/posts.client';
import { ViewMoreLink } from '@/components/CaseStudiesSection.styles';
import { useLocale, useTranslations } from 'next-intl';

interface PostContentProps {
  post: Post;
}
// זו קומפוננטה פשוטה שמקבלת את כל נתוני המאמר
const BlogPostContent = ({ post }: PostContentProps) => {
  const t = useTranslations('blogSection'); // טוען את הטקסט הסטטי
  const locale = useLocale(); // מקבל את השפה הנוכחית (he/en)

  // לוגיקה לבחירת השדות:
  const title = locale === 'en' ? post.title_en : post.title_he;
  const content = locale === 'en' ? post.content_he : post.content_he; //TODO: change to content_en when its translation

  return (
    <main className="pt-16" >
      <div className="container mx-auto max-w-4xl p-8">
        <ViewMoreLink as={Link} href={`/blog`}>
          {t('backLink')}
        </ViewMoreLink>
      </div>
      <article className="blog-content-container text-right">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        <p className="text-gray-500 mb-8 border-b pb-4">
          {t('publishedOn')}: {new Date(post.createdAt).toLocaleDateString(locale === 'he' ? 'he-IL' : 'en-US')}
        </p>

        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
      {/* ... (CTA) ... */}
    </main >
  );
};

export default BlogPostContent;