import Link from 'next/link';
// יבוא של ה-Type שהגדרנו בקובץ הנתונים
import { BlogPost } from '@/data/blog-posts';

// זו קומפוננטה פשוטה שמקבלת את כל נתוני המאמר
const BlogPostCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">

      {/* כותרת המאמר */}
      <h3 className="text-xl font-bold mb-3 text-blue-700">{post.title}</h3>

      {/* תקציר המאמר */}
      <p className="text-gray-600 mb-4">{post.summary}</p>

      {/* תאריך פרסום */}
      <p className="text-sm text-gray-400 mb-4">פורסם בתאריך: {post.date}</p>

      {/* הכפתור הקריטי: מוביל לכתובת הדינמית (ה-Slug) */}
      <Link href={`/blog/${post.slug}`} className="text-green-600 hover:text-green-800 font-semibold underline">
        קרא את המאמר המלא →
      </Link>
    </div>
  );
};

export default BlogPostCard;