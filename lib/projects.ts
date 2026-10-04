import { projects } from '@/config/Projects';
import { Project } from '@/types/project';
const extractSlug = (path: string) => path.replace('/projects/', '');

export const getPublishedProjects = (): Project[] =>
  projects.filter(project => project.isPublished === true && project.details);

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> =>
  getPublishedProjects().find(project => extractSlug(project.projectDetailsPageSlug) === slug);

export const getProjectSlugs = (): string[] =>
  getPublishedProjects().map(project => extractSlug(project.projectDetailsPageSlug));

export const getAllProjects = async (): Promise<Project[]> => getPublishedProjects();

// Deliberate homepage selection, independent of preserved legacy flags.
const featuredSlugs = ['rentra', 'cinevault', 'total-liquor', 'aog-coin'];
export const getCuratedProjects = (): Project[] => featuredSlugs.flatMap(slug =>
  getPublishedProjects().filter(project => extractSlug(project.projectDetailsPageSlug) === slug));
export const getFeaturedProjects = async (limit?: number): Promise<Project[]> =>
  limit ? getCuratedProjects().slice(0, limit) : getCuratedProjects();

export const getProjectNavigation = async (currentSlug: string): Promise<{
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}> => {
  const published = getPublishedProjects();
  const index = published.findIndex(project => extractSlug(project.projectDetailsPageSlug) === currentSlug);
  const preview = (project?: Project) => project ? {
    title: project.title, slug: extractSlug(project.projectDetailsPageSlug),
  } : null;
  if (index < 0) return { previous: null, next: null };
  return { previous: preview(published[index - 1]), next: preview(published[index + 1]) };
};
