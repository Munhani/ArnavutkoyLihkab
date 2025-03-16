import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lihkab Büro",
  description: "3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu",
  icons: {
    icon: [
      { url: '/lihkab_logo.jpg', type: 'image/jpeg' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" type="image/jpeg" href="/lihkab_logo.jpg" />
        <link rel="icon" type="image/jpeg" href="/lihkab_logo.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
