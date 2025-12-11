import Link from 'next/link';
// יבוא של ה-Type שהגדרנו בקובץ הנתונים
import { Post } from '@/app/api/posts.client';
import {
  Card,
  CaseTitle,
  CaseDesc,
  ViewMoreLink,
} from '../CaseStudiesSection.styles';
import { useLocale, useTranslations } from 'next-intl';

// זו קומפוננטה פשוטה שמקבלת את כל נתוני המאמר
const BlogPostCard = ({ post }: { post: Post }) => {
  const t = useTranslations('blogSection'); // טעינת הטקסט הסטטי מהקטגוריה 'blogSection'
  const locale = useLocale(); // מקבל את השפה הנוכחית (he/en)

  // לוגיקה לבחירת השדות:
  const title = locale === 'en' ? post.title_en : post.title_he;
  const content = locale === 'en' ? post.content_he : post.content_he; //TODO: change to content_en when its translation
  return (
    <>
      <Card key={post.slug} $bg="var(--color-background)">
        <CaseTitle>{title}</CaseTitle>
        <CaseDesc>{content.substring(0, 100)}</CaseDesc>
        <ViewMoreLink as={Link} href={`/blog/${post.slug}`}>
          {t('postLink')}
        </ViewMoreLink>
      </Card>
    </>
  );
};

export default BlogPostCard;