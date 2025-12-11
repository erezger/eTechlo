// src/components/blog/BlogListClient.tsx

'use client'; // **חובה! הופך את הקומפוננטה ל-Client Component**

import { useQuery } from '@tanstack/react-query';
import { getPostList } from '@/app/api/posts.client';
import {
  Section,
  SectionTitle,
  CaseGrid,
} from '../CaseStudiesSection.styles';
import BlogPostCard from './BlogPostCard';
import { useTranslations } from 'next-intl';

export default function BlogListClient() {
  const t = useTranslations('blogSection'); // טעינת הטקסט הסטטי מהקטגוריה 'blogSection'
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['postsList'],
    queryFn: getPostList,
  });

  if (isLoading) {
    return <p className="text-center mt-8">{t('loading')}</p>;
  }

  if (isError) {
    return <div className="error-message text-center mt-8">{t('errorFetch')}</div>;
  }

  // אם אין פוסטים
  if (!posts || posts.length === 0) {
    return <p className="text-center mt-8">{t('noPostFound')}</p>;
  }

  return (
    <Section id="blog">
      <SectionTitle>{t('sectionTitle')}</SectionTitle>
      <CaseGrid>
        {posts && posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </CaseGrid>
      {/* <Link href="/#contact" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          יש לך פרויקט? בוא נדבר על זה
        </Link> */}
    </Section>
  );
}