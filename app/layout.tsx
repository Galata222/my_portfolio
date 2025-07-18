import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Galata Waqwaya - Software Engineer & AI Enthusiast',
  description: 'Gold Medalist Software Engineer specializing in Django, React.js, PostgreSQL, and AI applications. Winner of Huawei ICT Competition 2022-2023 Cloud Track.',
  keywords: [
    'Software Engineer',
    'Django Developer',
    'React.js',
    'PostgreSQL',
    'AI Applications',
    'Natural Language Processing',
    'Haramaya University',
    'Gold Medalist',
    'Huawei ICT Competition',
    'Afan Oromo Spell Checker'
  ],
  authors: [{ name: 'Galata Waqwaya', url: 'https://www.linkedin.com/in/galat-a-waqwaya-821381224/' }],
  openGraph: {
    title: 'Galata Waqwaya - Software Engineer & AI Enthusiast',
    description: 'Gold Medalist Software Engineer with expertise in full-stack development and AI applications',
    type: 'website',
    locale: 'en_US',
    url: 'https://galatawaqwaya.com', // Replace with actual domain
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Galata Waqwaya Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galata Waqwaya - Software Engineer & AI Enthusiast',
    description: 'Gold Medalist Software Engineer with expertise in full-stack development and AI applications',
    images: ['/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://galatawaqwaya.com'), // Replace with actual domain
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}