import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "../lib/StyledComponentsRegistry";
import { Assistant, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const assistant = Assistant({ subsets: ["hebrew"], variable: "--font-assistant" });

export const metadata: Metadata = {
  title: "eTechlo — מפתחים הצלחה במהירוטקלו",
  description: "eTechlo: פיתוח אתרים, מערכות פנימיות, ייעוץ טכנולוגי ואוטומציה לעסקים.",
  openGraph: {
    title: "eTechlo — מפתחים הצלחה במהירוטקלו",
    description: "eTechlo: פיתוח אתרים, מערכות פנימיות, ייעוץ טכנולוגי ואוטומציה לעסקים.",
    url: "https://etechlo.com",
    siteName: "eTechlo",
    locale: "he_IL",
    type: "website",
  },
  metadataBase: new URL("https://etechlo.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:site_name" content="eTechlo" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${assistant.variable}`} style={{ direction: 'rtl' }}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
