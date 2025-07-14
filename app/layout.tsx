import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Galata Waqwaya - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating scalable web applications and exceptional user experiences.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development, Software Engineer',
  authors: [{ name: 'Galata Waqwaya' }],
  openGraph: {
    title: 'Galata Waqwaya - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galata Waqwaya - Full Stack Developer',
    description: 'Full Stack Developer specializing in modern web technologies',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="light"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}