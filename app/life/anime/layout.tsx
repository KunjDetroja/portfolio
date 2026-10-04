import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Anime | Kunj Detroja', description: 'A personal collection of anime by Kunj Detroja.', twitter: { card: 'summary', title: 'Anime | Kunj Detroja', description: 'A personal collection of anime by Kunj Detroja.' }, alternates: { canonical: '/life/anime' }, openGraph: { title: 'Anime | Kunj Detroja', description: 'A personal collection of anime by Kunj Detroja.', url: '/life/anime' } };
export default function Layout({children}: {children: React.ReactNode}) { return children; }
