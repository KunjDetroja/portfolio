import { PageMeta } from '@/types/meta';

// Base site configuration
export const siteConfig = {
  name: 'Kunj Detroja',
  title: 'Kunj Detroja Portfolio',
  description:
    'Kunj Detroja is a Full Stack Developer specializing in fintech, HRMS, and AI domains.',
  url: process.env.NEXT_PUBLIC_URL || 'https://kunj.me',
  ogImage: '/meta/opengraph-image.png',
  // Replace with your actual Google Search Console verification code
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  author: {
    name: 'Kunj Detroja',
    twitter: '@kunjdetroja',
    github: 'KunjDetroja',
    linkedin: 'kunjdetroja',
    email: 'kunjdetroja52@gmail.com',
  },
  keywords: [
    'Kunj Detroja',
    'Full Stack Developer',
    'portfolio',
    'developer',
    'full-stack',
    'react',
    'nodejs',
    'typescript',
    'web development',
    'software engineer',
    'MERN stack',
    'Kunj Detroja developer',
    'Kunj Detroja portfolio',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `Kunj Detroja - Full Stack Developer | Portfolio`,
    description: `Kunj Detroja is a Full Stack Developer building scalable web apps with focus on fintech, HRMS, and AI domains. View portfolio, projects, and experience.`,
    keywords: [
      'Kunj Detroja',
      'Full Stack Developer',
      'portfolio',
      'developer',
      'full-stack',
      'web development',
      'projects',
      'MERN stack',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact Kunj Detroja - Get in Touch',
    description:
      "Get in touch with Kunj Detroja for collaborations, projects, or opportunities. Full Stack Developer available for hire.",
    keywords: ['contact', 'hire Kunj Detroja', 'collaboration', 'freelance', 'developer'],
    ogImage: '/meta/contact.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Kunj Detroja - Work Experience & Professional Journey',
    description:
      "Explore Kunj Detroja's professional work experience across different companies and roles in software development.",
    keywords: [
      'Kunj Detroja work experience',
      'career',
      'professional',
      'software developer',
      'employment history',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: 'Kunj Detroja - Projects & Work Portfolio',
    description:
      "Discover Kunj Detroja's projects and work across different technologies and domains. From web apps to mobile solutions.",
    keywords: [
      'Kunj Detroja projects',
      'portfolio',
      'web development',
      'applications',
      'software',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    // Google Search Console verification
    ...(siteConfig.googleSiteVerification && {
      verification: {
        google: siteConfig.googleSiteVerification,
      },
    }),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
