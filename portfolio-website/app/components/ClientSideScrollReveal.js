'use client';

import dynamic from 'next/dynamic';

const ScrollRevealWrapper = dynamic(() => import('./ScrollRevealWrapper'), {
  ssr: false,
});

export default ScrollRevealWrapper;
