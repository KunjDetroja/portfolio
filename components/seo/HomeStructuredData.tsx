import { siteConfig } from '@/config/Meta';
import { navbarConfig } from '@/config/Navbar';
import { socialLinks } from '@/config/Hero';

const homeUrl = new URL('/', siteConfig.url).href;
const personId = `${homeUrl}#person`;
const websiteId = `${homeUrl}#website`;

// Publish this only on the homepage, whose main subject is Kunj's profile.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: homeUrl,
      name: siteConfig.name,
      alternateName: new URL(homeUrl).hostname,
      publisher: { '@id': personId },
      inLanguage: 'en',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${homeUrl}#profile`,
      url: homeUrl,
      name: `${siteConfig.name} - Full Stack Developer`,
      isPartOf: { '@id': websiteId },
      mainEntity: { '@id': personId },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: siteConfig.name,
      url: homeUrl,
      jobTitle: 'Full Stack Developer',
      description: siteConfig.description,
      image: new URL(navbarConfig.logo.src, homeUrl).href,
      sameAs: socialLinks.filter(link => link.href.startsWith('https://')).map(link => link.href),
      knowsAbout: [
        'React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB',
        'Redis', 'React Native', 'Expo', 'Full Stack Development',
      ],
    },
  ],
};

export default function HomeStructuredData() {
  return (
    <script
      id="home-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
    />
  );
}
