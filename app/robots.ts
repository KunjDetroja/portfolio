import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/Meta';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: new URL('/sitemap.xml', siteConfig.url).href,
    };
}
