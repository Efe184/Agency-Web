import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "OZANTARIK - Premium Dijital Pazarlama Ajansı",
  description: "8+ yıllık deneyimle markaların dijital dönüşümünde öncü. Satışı artıran, karlılığı yükselten premium dijital pazarlama çözümleri.",
  keywords: "dijital pazarlama, web tasarım, sosyal medya, seo, reklam yönetimi, marka danışmanlığı",
  authors: [{ name: "OzanTarık" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "OZANTARIK - Premium Dijital Pazarlama Ajansı",
    description: "8+ yıllık deneyimle markaların dijital dönüşümünde öncü. Premium dijital pazarlama çözümleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "OZANTARIK",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZANTARIK - Premium Dijital Pazarlama Ajansı",
    description: "8+ yıllık deneyimle markaların dijital dönüşümünde öncü. Premium dijital pazarlama çözümleri.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased bg-slate-900" suppressHydrationWarning={true}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
