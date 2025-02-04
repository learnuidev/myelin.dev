import { NavBar } from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { i18nConfig } from "@/libs/i18n-next/i18n-config";
import { I18NextProvider } from "@/libs/i18n-next/i18n-next-provider";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import { Footer } from "@/components/footer";

import { Toaster } from "@/components/ui/toaster";

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
  const locale = (await cookies()).get(i18nConfig.cookieName)?.value;
  const direction = dir(locale);

  return (
    <I18NextProvider>
      <html suppressHydrationWarning lang={locale} dir={direction}>
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
              <div className="fixed top-0 w-full">
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
