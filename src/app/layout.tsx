import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanced Cataract Surgery in Lucknow | Optimus Eye Hospital",
  description:
    "Get safe & effective cataract surgery at Optimus Eye Hospital, Lucknow. Consult experienced specialists — Dr. Arvind Verma & Dr. Amit Gupta. Book a consultation today.",
  keywords: [
    "cataract surgery Lucknow",
    "eye hospital Lucknow",
    "cataract treatment",
    "Optimus Eye Hospital",
    "cataract specialist Lucknow",
  ],
  openGraph: {
    title: "Advanced Cataract Surgery in Lucknow | Optimus Eye Hospital",
    description:
      "Safe & effective cataract surgery at Optimus Eye Hospital, Lucknow. Book a consultation with our expert eye surgeons today.",
    url: "https://cataract.optimuseyehospital.in/",
    siteName: "Optimus Eye Hospital",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
