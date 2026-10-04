import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';

import { CommandPalette } from '@/components/commandPalette/CommandPalette';
import { CommandPaletteProvider } from '@/lib/command-palette-context';
import { generateMetadata as getMetadata } from '@/config/Meta';

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
              <a href="#main-content" className="skip-link">Skip to content</a>

              <Navbar />
              <main id="main-content" tabIndex={-1}>{children}</main>
              <OnekoCat />
              <Quote />
              <Footer />

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
