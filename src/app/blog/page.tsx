// app/blog/page.tsx

import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts'; // ודא שהנתיב נכון
import BlogPostCard from '@/components/shared/BlogPostCard';

// הפונקציה הראשית של הדף
export default function BlogIndexPage() {
  return (
    <main className="container mx-auto p-8 max-w-6xl">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        הבלוג הטכנולוגי של eTechlo: תובנות לפיתוח עסקי
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      {/* כפתור Call to Action לאחר הכרטיסים */}
      <div className="mt-12 text-center">
        <Link href="/#contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          יש לך פרויקט? בוא נדבר על זה
        </Link>
      </div>
    </main>
  );
}