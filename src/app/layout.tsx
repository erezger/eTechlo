import Script from 'next/script'; // ודא שאתה מייבא את זה בראש הקובץ!
import "./globals.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import { Assistant, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';
import { PricingProvider } from '@/context/PricingContext';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const assistant = Assistant({ subsets: ["hebrew"], variable: "--font-assistant" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const seo = messages.seo;
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  const GA_TRACKING_ID = process.env.GA_TRACKIND_ID; // החלף את XXXXXXX בקוד המעקב שלך!

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/*
          1. טוען את הסקריפט הראשי של Google Tag Manager
          strategy="afterInteractive" מבטיח טעינה אסינכרונית ואופטימלית למהירות.
        */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        {/*
          2. הגדרת ה-dataLayer והקונפיגורציה
        */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
        {/* ... שאר תגיות ה-head ... */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:locale" content={seo.locale} />
        <meta property="og:site_name" content={seo.siteName} />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${assistant.variable}`} style={{ direction: dir }}>
        <ReactQueryProvider>
          <PricingProvider>
            <StyledComponentsRegistry>
              <NextIntlClientProvider messages={messages} locale={locale}>
                <Header />
                {children}
                <Footer />
              </NextIntlClientProvider>
            </StyledComponentsRegistry>

            {/* **מיקום ה-Toast Provider:** */}
            <Toaster />
          </PricingProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
