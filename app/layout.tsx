import type { Metadata } from "next";
import { ThemeProvider } from "@/utils/theme-provider";
import "@/scss/theme.scss";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta_sans',
})
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

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
    <html lang="ar">
      <body
        className={cn(
          'relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300',
          inter.variable,
          jakarta_sans.variable,
          playfair.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
