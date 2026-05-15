import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import "@fontsource/noto-sans-lao/400.css";
import "@fontsource/noto-sans-lao/500.css";
import "@fontsource/noto-sans-lao/600.css";
import "@fontsource/noto-sans-lao/700.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nengxiong WANGTOUAXIONG — Portfolio",
  description:
    "Portfolio ສ່ວນຕົວຂອງ Nengxiong WANGTOUAXIONG — Full-Stack Developer & Designer ຜູ້ສ້າງສັນ digital solutions ທີ່ສວຍງາມ",
  icons: {
    icon: "/nx-creations-logo.png",
    shortcut: "/nx-creations-logo.png",
    apple: "/nx-creations-logo.png",
  },
  openGraph: {
    title: "Nengxiong WANGTOUAXIONG — Portfolio",
    description: "Full-Stack Developer & Designer",
    type: "website",
    images: ["/nx-creations-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="lo"
      className={cn("h-full", "scroll-smooth", geistMono.variable)}
    >
      <body className="min-h-full flex flex-col bg-black text-white antialiased font-(family-name:--font-noto-sans-lao)">
        {children}
      </body>
    </html>
  );
}
