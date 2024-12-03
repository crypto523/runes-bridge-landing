'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Loading from '@/components/Loading/Loading';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Home() {
  const [preloading, setPreloading] = useState<boolean>(true);
  const container = useRef<HTMLElement | any>();

  return (
    <main className='relative w-full h-full'>
      <section className="boxes-container" ref={container}>
        
      </section>
      {preloading && <Loading setPreloading={() => setPreloading(false)} />}
    </main>
  );
}
