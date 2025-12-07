import { getPostBySlug, BLOG_POSTS } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
// --- מחק את השורה הבאה: import { use } from 'react';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
import Link from 'next/link';
// ודא שגם Link מיובא אם אתה משתמש בו

// 1. הפונקציה שמייצרת את ה-URLs מראש
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 2. generateMetadata - השתמש ב-PageProps
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {

  // ניגשים ל-params בבטחה:
  const params = props.params as { slug: string };
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title + ' | eTechlo Blog',
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.etechlo.com/blog/${params.slug}`,
    },
  };
}

// 3. הקומפוננטה הראשית שמציגה את המאמר (מתוקנת)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPostPage(props: any) {
  // ניגשים ל-params בבטחה:
  const params = props.params as { slug: string };
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-16">
      <div className="container mx-auto max-w-4xl p-8">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
          ← חזרה לבלוג
        </Link>
      </div>
      <article className="blog-content-container text-right">
        <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8 border-b pb-4">פורסם בתאריך: {post.date}</p>

        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      {/* ... (CTA) ... */}
    </main>
  );
}