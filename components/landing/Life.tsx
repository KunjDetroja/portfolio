import { Link } from 'next-view-transitions';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { lifeCategories } from '@/config/Life';
import { LifeCategory } from '@/types/life';

export default function Life() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Personal" heading="Life" />
      <div className="mt-6 flex flex-col gap-3">
        {lifeCategories.map((category: LifeCategory) => (
          <Link
            key={category.id}
            href={category.href}
            className="bg-card hover:bg-card/80 flex items-center gap-4 rounded-lg border p-4 transition-colors"
          >
            <div className="text-muted-foreground">{category.icon}</div>
            <div>
              <h3 className="font-medium">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
