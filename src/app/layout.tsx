import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import "@fontsource/noto-sans-lao/400.css";
import "@fontsource/noto-sans-lao/500.css";
import "@fontsource/noto-sans-lao/600.css";
import "@fontsource/noto-sans-lao/700.css";

import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter, Noto_Sans_Thai } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nengxiong WANGTOUAXIONG — Portfolio",
  description:
    "Portfolio of Nengxiong WANGTOUAXIONG — Full-Stack Developer & Designer creating elegant digital solutions",
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
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "scroll-smooth",
        geistMono.variable,
        inter.variable,
        notoSansThai.variable
      )}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('nx_portfolio_theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 antialiased font-sans">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
