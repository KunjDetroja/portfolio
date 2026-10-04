import { Link } from 'next-view-transitions';
import Container from '../common/Container';

const skills = [
  {
    category: 'Web applications',
    description: 'Server-rendered pages, interactive interfaces, forms, and predictable client state.',
    items: ['React', 'Next.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
    examples: [{ title: 'CineVault', href: '/projects/cinevault' }, { title: 'DineFlow', href: '/projects/dineflow' }],
  },
  {
    category: 'Backend & data',
    description: 'APIs, relational and document models, authentication, caching, and background processing.',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle', 'Sequelize'],
    examples: [{ title: 'Rentra', href: '/projects/rentra' }, { title: 'Org-X', href: '/projects/organization-management-system' }],
  },
  {
    category: 'Mobile experiences',
    description: 'Native navigation, secure sessions, embedded game journeys, and network recovery.',
    items: ['React Native', 'Expo', 'React Navigation', 'SecureStore', 'WebView'],
    examples: [{ title: 'AOG', href: '/projects/aog-coin' }],
  },
  {
    category: 'Integrations & quality',
    description: 'Payments, real-time events, cloud storage, AI-assisted workflows, and automated tests.',
    items: ['Socket.IO', 'Finix', 'Razorpay', 'AWS S3', 'Ollama', 'Jest', 'fast-check'],
    examples: [{ title: 'Total Liquor', href: '/projects/total-liquor' }, { title: 'Winbid', href: '/projects/winbid-ai' }, { title: 'Org-X', href: '/projects/organization-management-system' }],
  },
];

export default function About() {
  return (
    <Container className="mt-20">
      <section aria-labelledby="capabilities-heading">
        <h2 id="capabilities-heading" className="text-2xl font-bold">Engineering capabilities</h2>
        <p className="mt-2 max-w-2xl text-secondary">The skills behind the work, with examples you can explore.</p>
        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {skills.map(({ category, description, items, examples }) => (
            <div key={category} className="min-w-0 border-t pt-4">
              <dt className="font-semibold">{category}</dt>
              <dd>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{description}</p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={category + ' skills'}>
                  {items.map(skill => (
                    <li key={skill} className="rounded-md border bg-muted/20 px-2.5 py-1 text-sm text-secondary">{skill}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-secondary">See the work:</span>
                  {examples.map(example => <Link key={example.href} href={example.href} className="underline underline-offset-4 hover:text-secondary">{example.title}</Link>)}
                </div>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 border-t pt-4 text-sm text-secondary">
          Freelance work: <Link href="/projects/runner-spikes" className="text-foreground underline underline-offset-4">Runner Spikes</Link>,
          a footwear storefront with checkout and fulfillment workflows.
        </p>
      </section>
    </Container>
  );
}
