import { getPostBySlug, BLOG_POSTS } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import type { Metadata } from 'next';
// ... (ייבוא רכיבים נוספים כמו Link וכו')

// 1. הפונקציה שמייצרת את ה-URLs מראש (חשוב ל-SEO!)
export async function generateStaticParams() {
  // מחזירה רשימה של כל ה-Slugs הקיימים (custom-crm-vs-shelf, typescript-for-enterprise-nextjs, וכו')
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 2. פונקציית יצירת המטא-דאטה (ל-SEO)
export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title + ' | eTechlo Blog',
    description: post.metaDescription,
    // ... שאר תגיות ה-Metadata
  };
}

// 3. הקומפוננטה הראשית שמציגה את המאמר
export default function BlogPostPage({ params }: Props) {
  // שולף את המאמר הרלוונטי לפי ה-slug
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-16">
      {/* ... (חזרה לבלוג) ... */}

      {/* הוספנו את הקלאס blog-content-container כדי לקבל עיצוב נקי ומרווח 
      */}
      <article className="blog-content-container text-right">
        {/* כותרת H1 */}
        <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8 border-b pb-4">פורסם בתאריך: {post.date}</p>

        {/* רכיב ה-Markdown שיהיה מושפע מה-CSS הגלובלי */}
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      {/* ... (CTA) ... */}
    </main>
  );
}