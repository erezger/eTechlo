import "./globals.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import { Assistant, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

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

  return (
    <html lang={locale} dir={dir}>
      <head>
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
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
