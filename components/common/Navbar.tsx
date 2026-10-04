'use client';
import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Container from './Container';
import { ThemeToggleButton } from '../theme/ThemeSwitch';
import { CommandPaletteButton } from '../commandPalette/CommandPaletteButton';
export default function Navbar() { const pathname=usePathname(); const items=[...navbarConfig.navItems,{label:'Contact',href:'/contact'}]; return <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-sm"><Container className="py-3"><nav aria-label="Main navigation" className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-2 sm:px-6"><Link href="/" aria-label="Kunj Detroja home"><Image className="size-11 rounded-md border object-cover" src={navbarConfig.logo.src} alt="" width={44} height={44} /></Link><div className="col-span-3 col-start-1 row-start-2 flex items-center justify-center gap-1 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:gap-3">{items.map(item=><Link key={item.href} href={item.href} aria-current={pathname===item.href||pathname.startsWith(item.href+'/')?'page':undefined} className="inline-flex min-h-11 items-center px-2 text-sm hover:underline aria-[current=page]:underline underline-offset-4">{item.label}</Link>)}</div><div className="col-start-3 row-start-1 flex items-center gap-1"><CommandPaletteButton /><ThemeToggleButton variant="circle" start="top-right" blur /></div></nav></Container></header>; }
