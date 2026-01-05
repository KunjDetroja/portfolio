'use client';

import Container from '@/components/common/Container';
import { lifeCategories } from '@/config/Life';
import { Tv } from 'lucide-react';
import Image from 'next/image';

export default function AnimePage() {
  const animeCategory = lifeCategories.find((cat) => cat.id === 'anime');

  if (!animeCategory) {
    return null;
  }

  return (
    <Container className="min-h-screen py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{animeCategory.title}</h1>
        <p className="text-muted-foreground mt-2">{animeCategory.description}</p>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="p-2 bg-muted rounded-md flex items-center justify-center text-[#736F70] border border-black/10 dark:border-white/10">
            <Tv className="size-4" />
          </div>
          <h2 className="text-2xl font-semibold ml-2">Favorites</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-24">
          {animeCategory.items?.map((anime) => (
            <div
              key={anime.id}
              className="bg-card text-card-foreground group flex h-full w-full flex-col gap-6 overflow-hidden rounded-xl border border-gray-100 p-0 shadow-none transition-all dark:border-gray-800"
            >
              <div className="p-0">
                <div className="flex h-full flex-col">
                  <div className="bg-muted relative aspect-2/3 w-full overflow-hidden">
                    <Image
                      src={anime.image}
                      alt={anime.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <h3 className="text-primary line-clamp-2 text-base font-semibold leading-tight">{anime.title}</h3>
                    <p className="text-muted-foreground text-sm">{anime.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
