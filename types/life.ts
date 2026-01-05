export interface LifeItem {
  id: string;
  title: string;
  year: string;
  image: string;
  href?: string;
}

export interface LifeCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  items?: LifeItem[];
}
