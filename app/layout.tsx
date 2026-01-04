import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { SmoothScrollRestore } from '@/components/common/SmoothScrollRestore';
import { CommandPalette } from '@/components/commandPalette/CommandPalette';
import { CommandPaletteProvider } from '@/lib/command-palette-context';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/next';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
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
