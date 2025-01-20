import type { Metadata } from "next";
import { ThemeProvider } from "@/utils/theme-provider";
import "@/scss/theme.scss";
import Footer from "@/components/layout/Footer";
import  MainNavbar  from "@/components/layout/navbar/MainNavbar";
import { cn } from "@/lib/utils";
import { Cairo } from 'next/font/google'

const cairo = Cairo({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'], // Add the weights you need
  style: ['normal'], // Include italic if needed
  subsets: ['latin', 'arabic'], // Include Arabic subset
  display: 'swap', // Optimize font rendering
  variable: '--font-cairo', // Custom CSS variable for the font
});

export const metadata: Metadata = {
  title: "V0",
  description: "V0",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cn(
          'relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300',
          cairo.variable, // Add Cairo here
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNavbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
