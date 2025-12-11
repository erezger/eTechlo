// app/blog/page.tsx

import BlogListClient from '@/components/blog/BlogListClient';

// הפונקציה הראשית של הדף
export default function BlogIndexPage() {

  // 1. הצגת הפוסטים
  return (
    <BlogListClient />
  );
}