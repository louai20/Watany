import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css";
import TelegramWidget from "@/components/TelegramWidget";
import { Toaster } from 'react-hot-toast';

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  weight: ['400', '500', '600', '700'],
  subsets: ['arabic'],
  variable: '--font-ibm-arabic',
});

export const metadata: Metadata = {
  title: "وطني - دليل الخدمات الحكومية الرقمي",
  description: "تطبيق وطني هو دليلك الشامل للخدمات الحكومية في سوريا",
  icons: {
    icon: {
      url: '/whiteicon.png',
      type: 'image/png',
    },
    shortcut: {
      url: '/whiteicon.png',
      type: 'image/png',
    },
    apple: {
      url: '/whiteicon.png',
      type: 'image/png',
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={ibmPlexArabic.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TelegramWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
  
}
