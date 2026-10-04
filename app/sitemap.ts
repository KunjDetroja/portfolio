import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/Meta';
import { getPublishedProjects } from '@/lib/projects';
export default function sitemap(): MetadataRoute.Sitemap { return ['','/work-experience','/projects','/contact','/life/anime','/life/series',...getPublishedProjects().map(p=>p.projectDetailsPageSlug)].map(path=>({url:new URL(path || '/',siteConfig.url).href})); }
