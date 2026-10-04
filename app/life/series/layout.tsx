import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Series | Kunj Detroja', description: 'A personal collection of series by Kunj Detroja.', twitter: { card: 'summary', title: 'Series | Kunj Detroja', description: 'A personal collection of series by Kunj Detroja.' }, alternates: { canonical: '/life/series' }, openGraph: { title: 'Series | Kunj Detroja', description: 'A personal collection of series by Kunj Detroja.', url: '/life/series' } };
export default function Layout({children}: {children: React.ReactNode}) { return children; }
