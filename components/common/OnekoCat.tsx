 'use client';
import { useEffect } from 'react';
import { safeStorage } from '@/lib/safe-storage';
import { setOnekoVisible } from '@/lib/oneko';
export default function OnekoCat() { useEffect(()=>{const enabled=safeStorage.getItem('portfolio-oneko-enabled')==='true';document.documentElement.dataset.oneko=String(enabled);setOnekoVisible(enabled);},[]);return null; }
