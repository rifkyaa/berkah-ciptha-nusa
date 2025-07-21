import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Berkah Ciptha Nusa | Properti, Ekspor Dekorasi, Fashion, Food & Beverage",
  description:
    "Berkah Ciptha Nusa adalah perusahaan Indonesia yang bergerak di bidang properti dan ekspor produk lokal, termasuk dekorasi rumah, fashion, dan makanan & minuman (F&B).",
  keywords: [
    "Berkah Ciptha Nusa",
    "Ekspor produk lokal",
    "Properti Indonesia",
    "Dekorasi rumah",
    "Fashion lokal",
    "Makanan dan Minuman",
    "F&B Indonesia",
  ],
  authors: [{ name: "Berkah Ciptha Nusa", url: "https://berkahcipthanusa.web.id" }],
  creator: "Berkah Ciptha Nusa",
  openGraph: {
    title: "Berkah Ciptha Nusa | Properti & Ekspor Produk Lokal",
    description:
      "Berkah Ciptha Nusa berkomitmen mendukung produk lokal Indonesia melalui properti dan ekspor di bidang dekorasi rumah, fashion, serta makanan & minuman.",
    url: "https://berkahcipthanusa.web.id",
    siteName: "Berkah Ciptha Nusa",
    images: [
      {
        url: "/og-image.jpg", // pastikan file ini tersedia di /public
        width: 1200,
        height: 630,
        alt: "Berkah Ciptha Nusa - Properti & Produk Lokal",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkah Ciptha Nusa | Properti & Produk Lokal",
    description:
      "Mendukung ekspor produk lokal Indonesia di bidang dekorasi rumah, fashion, dan kuliner. Temukan solusi bisnis terbaik bersama Berkah Ciptha Nusa.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.jpg", // pastikan file ini tersedia di /public
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  metadataBase: new URL("https://berkahcipthanusa.web.id"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
