// src/components/pricing/PricingPachageList.tsx

'use client'; // **חובה! הופך את הקומפוננטה ל-Client Component**

import { useQuery } from '@tanstack/react-query';
import { PricingGrid } from './PricingSection.styles';
import { useTranslations } from 'next-intl';
import { getPricingPackages } from '@/app/api/pricing.client';
import PricingPackageCard from './PricingPackageCard';

interface PricingPackageListProps {
  featuredOnly: boolean; // הפקטור שקובע את השאילתה
}

export default function PricingPackagesList({ featuredOnly }: PricingPackageListProps) {
  const t = useTranslations("PricingSection");
  // 🛑 התיקון: הכללת הפרמטר ב-queryKey
  const QUERY_KEY = ['pricingPackages', { featured: featuredOnly }];
  // 1. הגדרת ה-Query:
  const {
    data: packages,
    isLoading,
    isError,
  } = useQuery({
    // מפתח ייחודי ל-Cache של הנתונים האלו
    queryKey: QUERY_KEY,
    // פונקציית ה-fetch שלנו
    queryFn: () => getPricingPackages(featuredOnly),
  });

  // 2. טיפול במצבי טעינה ושגיאה:
  if (isLoading) {
    return <p>...טוען חבילות תמחור</p>;
  }

  if (isLoading) {
    return <p className="text-center mt-8">{t('loading')}</p>;
  }

  if (isError) {
    return <div className="error-message text-center mt-8">{t('errorFetch')}</div>;
  }

  // אם אין פוסטים
  if (!packages || packages.length === 0) {
    return <p className="text-center mt-8">{t('noPostFound')}</p>;
  }

  return (
    <PricingGrid>
      {packages && packages.map((p, idx: number) => (
        <PricingPackageCard key={idx} p={p} />
      ))}
    </PricingGrid>
  );
}