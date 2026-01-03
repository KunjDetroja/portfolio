import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ContentBlock, Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import Website from '../svgs/Website';

// Content Block Renderer
function renderContentBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'heading':
      if (block.level === 2) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
            {block.text}
          </h2>
        );
      }
      return (
        <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
          {block.text}
        </h3>
      );

    case 'paragraph':
      return (
        <p
          key={index}
          className={`text-muted-foreground mb-4 leading-relaxed ${
            block.highlight
              ? 'bg-primary/10 border-l-4 border-primary pl-4 py-2 rounded-r-md'
              : ''
          }`}
          dangerouslySetInnerHTML={{
            __html: block.text
              .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
              .replace(/\*([^*]+)\*/g, '<em>$1</em>')
              .replace(/`([^`]+)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>'),
          }}
        />
      );

    case 'list':
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag
          key={index}
          className={`mb-4 space-y-2 ${block.ordered ? 'list-decimal' : 'list-none'} pl-0`}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-muted-foreground"
              dangerouslySetInnerHTML={{
                __html: `<span class="mt-2 block size-1.5 rounded-full bg-primary shrink-0"></span><span>${item
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
                  .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>')}</span>`,
              }}
            />
          ))}
        </ListTag>
      );

    case 'highlight':
      const variantStyles = {
        info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200',
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950/30 dark:border-yellow-800 dark:text-yellow-200',
        default: 'bg-muted/50 border-border text-foreground',
      };
      return (
        <div
          key={index}
          className={`mb-4 rounded-lg border p-4 ${variantStyles[block.variant || 'default']}`}
          dangerouslySetInnerHTML={{
            __html: block.text
              .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
              .replace(/`([^`]+)`/g, '<code class="bg-black/10 dark:bg-white/10 px-1 py-0.5 rounded text-sm font-mono">$1</code>'),
          }}
        />
      );

    case 'image':
      return (
        <figure key={index} className="mb-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              className="object-cover"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'code':
      return (
        <pre
          key={index}
          className="mb-4 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"
        >
          <code className={block.language ? `language-${block.language}` : ''}>
            {block.code}
          </code>
        </pre>
      );

    case 'quote':
      return (
        <blockquote
          key={index}
          className="mb-4 border-l-4 border-primary bg-muted/30 py-3 pl-4 pr-4 italic"
        >
          <p className="text-muted-foreground">&ldquo;{block.text}&rdquo;</p>
          {block.author && (
            <footer className="mt-2 text-sm text-muted-foreground">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );

    case 'divider':
      return <Separator key={index} className="my-8" />;

    case 'features':
      return (
        <div key={index} className="mb-6 grid gap-4 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border bg-card p-4 transition-colors hover:bg-muted/50"
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

interface ProjectContentProps {
  project: Project;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    role,
    status = 'completed',
    challenges,
    learnings,
    content,
  } = project;

  const statusVariant =
    status === 'completed'
      ? 'default'
      : status === 'in-progress'
        ? 'secondary'
        : 'outline';

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          {/* Project Status and Technologies */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant} className="text-sm">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            {title}
          </h1>

          <p className="text-xl text-muted-foreground">{description}</p>

          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-muted/30 px-3 py-1.5 text-sm">
            <span className="text-muted-foreground">Role</span>
            <span className="font-medium">{role}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Website className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button variant="outline" asChild>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Technology Stack */}
      <div className="mb-8">
        <div className="rounded-lg border bg-muted/20 p-4">
          <h3 className="mb-3 text-lg font-semibold">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology, index) => (
              <Skill
                key={index}
                name={technology.name}
                href={technology.href}
              >
                {technology.icon}
              </Skill>
            ))}
          </div>
        </div>
      </div>

      {/* Challenges and Learnings */}
      {(challenges?.length || learnings?.length) && (
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {challenges && challenges.length > 0 && (
            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950/20">
              <h3 className="mb-3 text-lg font-semibold text-yellow-800 dark:text-yellow-200">
                Key Challenges
              </h3>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-yellow-700 dark:text-yellow-300"
                  >
                    <span className="mt-1 block size-1.5 rounded-full bg-yellow-500 dark:bg-yellow-400" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {learnings && learnings.length > 0 && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
              <h3 className="mb-3 text-lg font-semibold text-green-800 dark:text-green-200">
                Key Learnings
              </h3>
              <ul className="space-y-2">
                {learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-green-700 dark:text-green-300"
                  >
                    <span className="mt-1 block size-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {content && content.length > 0 && (
        <div className="mt-8">
          {content.map((block, index) => renderContentBlock(block, index))}
        </div>
      )}
    </article>
  );
}
