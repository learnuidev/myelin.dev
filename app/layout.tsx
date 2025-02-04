import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { I18NextProvider } from "@/libs/i18n-next/i18n-next-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { getLangAndDirection } from "@/libs/i18n-next/get-lang-and-direction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "myelin",
  description: "translation infra from the future",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang, direction } = await getLangAndDirection();

  return (
    <I18NextProvider>
      <html suppressHydrationWarning lang={lang} dir={direction}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <div className="relative">
              <div className="fixed top-0  w-full z-50">
                <NavBar />
              </div>
              {children}
            </div>

            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </I18NextProvider>
  );
}
