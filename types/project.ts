// Content block types for rich project content
export type ContentBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string; highlight?: boolean }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'highlight'; text: string; variant?: 'info' | 'success' | 'warning' | 'default' }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'code'; code: string; language?: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'divider' }
  | { type: 'features'; items: { title: string; description: string }[] };

export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link?: string;
  technologies: { name: string; icon: React.ReactNode; href: string }[];
  github?: string;
  live?: string;
  details: boolean;
  projectDetailsPageSlug: string;
  isWorking: boolean;
  // Case study fields
  timeline?: string;
  role?: string;
  team?: string;
  status?: 'completed' | 'in-progress' | 'archived';
  featured?: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished?: boolean;
  content?: ContentBlock[];
}

export interface ProjectCaseStudyFrontmatter {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  timeline: string;
  role: string;
  team?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  challenges?: string[];
  learnings?: string[];
  isPublished: boolean;
}

export interface ProjectCaseStudy {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export interface ProjectCaseStudyPreview {
  slug: string;
  frontmatter: ProjectCaseStudyFrontmatter;
}
