"use client";

import { useLocale, useTranslations } from 'next-intl';
import {
  Card,
  Price,
  FeaturesList,
  FeatureItem,
  PriceNote,
  FeatureItemTitle,
} from './PricingSection.styles';
import { PricingPackage } from '@/app/api/pricing.client';
import { FaDollarSign, FaShekelSign } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { PriceLink } from '../shared/PrimaryButton';
import { usePricingContext } from '@/context/PricingContext';
import { usePathname, useRouter } from 'next/navigation';

interface PricingPackageProps {
  p: PricingPackage;
}
export default function PricingPackageCard({ p }: PricingPackageProps) {
  const t = useTranslations("PricingSection");
  const locale = useLocale(); // מקבל את השפה הנוכחית (he/en)
  const { setSelectedPackage } = usePricingContext();
  const pathname = usePathname(); // איזה דף אנחנו עכשיו (/ או /pricing)
  const router = useRouter();

  // לוגיקה לבחירת השדות:
  const packageName = locale === 'en' ? p.packageName_en : p.packageName_he;
  const packageDescription = locale === 'en' ? p.description_en : p.description_he;
  const currency = locale === 'en' ? <FaDollarSign /> : <FaShekelSign />;

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. מנע את הפעולה הדיפולטית של Anchor (אנו נפעיל גלילה ידנית ו-Pre-fill)
    e.preventDefault();

    // 1. הגדרת URL היעד: תמיד דף הבית + Hash לסקשיין Contact
    const targetUrl = `/?package=${p.packageName_en}#contact`; // עדיף להשתמש ב-slug/en כשם ב-URL

    if (pathname === '/') {
      // 🛑 מקרה 1: אם אנחנו בדף הבית (Home)
      // השתמש ב-Context (כפי שעשינו קודם) ואז גלול.
      setSelectedPackage(packageName);
      window.location.href = '#contact';
      // setTimeout(() => setSelectedPackage(null), 2000);

    } else {
      // 🛑 מקרה 2: אם אנחנו בדף אחר (למשל /pricing)
      // 1. נקה את ה-Context (לא רלוונטי לניווט בין דפים)
      setSelectedPackage(null);
      // 2. בצע ניווט עם פרמטר Query
      router.push(targetUrl);
    }
  };

  return (
    <Card $bg="var(--color-background)">
      <h3>{packageName}</h3>
      <Price>{p.price_min}
        <PriceNote>{currency}</PriceNote>
      </Price>
      <FeaturesList>
        {/* eslint-disable @typescript-eslint/no-unused-vars */}
        <ReactMarkdown
          components={{
            // 1. נחליף את רכיב ה-ul (רשימה לא ממוספרת)
            // כדי להשתמש ב-FeaturesList Styled Component שלך.
            ul: ({ node: _node, ...props }) => (
              <FeatureItemTitle {...props} /> // משתמשים ב-div כמעטפת
            ),
            // 2. נחליף את רכיב ה-li (פריט ברשימה)
            // כדי להשתמש ב-FeatureItem Styled Component שלך.
            li: ({ node: _node, ...props }) => (
              <FeatureItem {...props} />
            ),
            // 3. ניתן להוסיף רנדרים נוספים כמו p, h4, strong וכו'.
          }}
        >
          {packageDescription}
        </ReactMarkdown>
        {/* eslint-enable @typescript-eslint/no-unused-vars */}
      </FeaturesList >
      <PriceLink as="a" href="#contact" onClick={handleCtaClick}>
        {t("cta")}
      </PriceLink>
    </Card >
  );
}
