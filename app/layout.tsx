import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { SmoothScrollRestore } from '@/components/common/SmoothScrollRestore';
import { CommandPalette } from '@/components/commandPalette/CommandPalette';
import { CommandPaletteProvider } from '@/lib/command-palette-context';
import { generateMetadata as getMetadata, siteConfig } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
import Script from 'next/script';

import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/next';

export const metadata = getMetadata('/');

// JSON-LD structured data for SEO — tells search engines who "Kunj Detroja" is
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  url: siteConfig.url,
  jobTitle: 'Full Stack Developer',
  email: siteConfig.author.email,
  sameAs: [
    `https://www.linkedin.com/in/${siteConfig.author.linkedin}/`,
    `https://github.com/${siteConfig.author.github}`,
    `https://twitter.com/${siteConfig.author.twitter?.replace('@', '')}`,
  ],
  description: siteConfig.description,
  knowsAbout: [
    'TypeScript',
    'React',
    'Node.js',
    'MongoDB',
    'MERN Stack',
    'Full Stack Development',
    'Fintech',
    'HRMS',
    'AI',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <Script
            id="json-ld-person"
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <CommandPaletteProvider>
              <ReactLenis root>
                <SmoothScrollRestore />
                <Navbar />
                {children}
                <OnekoCat />
                <Quote />
                <Footer />
              </ReactLenis>
              <CommandPalette />
              <Toaster />
            </CommandPaletteProvider>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
