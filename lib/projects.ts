import { projects } from "@/config/Projects"
import { Project } from "@/types/project"

// Helper to extract slug from projectDetailsPageSlug
const extractSlug = (projectDetailsPageSlug: string): string => {
  return projectDetailsPageSlug.replace('/projects/', '');
}

// Get a project by slug
export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  const project = projects.find((p) => p.projectDetailsPageSlug === `/projects/${slug}`);
  
  if (!project || project.isPublished === false) {
    return undefined;
  }

  return project;
}

// Get all project slugs for static generation
export const getProjectSlugs = (): string[] => {
  return projects
    .filter((project) => project.isPublished !== false && project.details)
    .map((project) => extractSlug(project.projectDetailsPageSlug));
}

// Get navigation (previous/next) for a project
export const getProjectNavigation = async (currentSlug: string): Promise<{
  previous: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}> => {
  const publishedProjects = projects.filter((p) => p.isPublished !== false && p.details);
  const currentIndex = publishedProjects.findIndex(
    (p) => extractSlug(p.projectDetailsPageSlug) === currentSlug
  );

  const previous = currentIndex > 0
    ? {
        title: publishedProjects[currentIndex - 1].title,
        slug: extractSlug(publishedProjects[currentIndex - 1].projectDetailsPageSlug),
      }
    : null;

  const next = currentIndex < publishedProjects.length - 1
    ? {
        title: publishedProjects[currentIndex + 1].title,
        slug: extractSlug(publishedProjects[currentIndex + 1].projectDetailsPageSlug),
      }
    : null;

  return { previous, next };
}

// Get all published projects
export const getAllProjects = async (): Promise<Project[]> => {
  return projects.filter((p) => p.isPublished !== false && p.details);
}

// Get featured projects
export const getFeaturedProjects = async (limit?: number): Promise<Project[]> => {
  const featured = projects.filter((p) => p.isPublished !== false && p.featured && p.details);
  return limit ? featured.slice(0, limit) : featured;
}