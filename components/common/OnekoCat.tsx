'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const ONEKO_ENABLED_KEY = 'portfolio-oneko-enabled';

export default function OnekoCat() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(ONEKO_ENABLED_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(stored === 'true');
  }, []);

  if (!enabled) {
    return null;
  }

  return <Script src="./oneko/oneko.js" data-cat="./oneko/oneko.gif" />;
}
