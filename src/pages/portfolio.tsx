'use client';

import { PowerGlitch } from 'powerglitch';
import { useEffect } from 'react';

import About from '@/components/sitesections/About';
import Contact from '@/components/sitesections/Contact';
import Guestbook from '@/components/sitesections/Guestbook';
import Music from '@/components/sitesections/Music';
import Photography from '@/components/sitesections/Photography';
import Projects from '@/components/sitesections/Projects';

export default function Portfolio() {
  useEffect(() => {
    PowerGlitch.glitch('.glitch');
  }, []);
  return (
    <div
      className='z-60 fixed grid h-full w-full grid-cols-1 items-center justify-items-center bg-black lg:grid-cols-3'
      style={{
        backgroundImage: "url('/images/background.gif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='cat-fade'>
        <About />
      </div>
      <div className='cat-fade'>
        <Projects />
      </div>
      <div className='cat-fade'>
        <Guestbook />
      </div>
      <div></div>
      <div>
        <h1
          className='intro-fade text-1xl whitespace-nowrap text-center text-white md:text-2xl lg:text-3xl xl:text-4xl'
          style={{
            fontFamily: 'Major',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
          }}
        >
          This is the website of
        </h1>
        <br></br>
        <h1
          className='name-fade glitch whitespace-nowrap text-center text-6xl text-white md:text-7xl lg:text-8xl xl:text-9xl'
          style={{
            fontFamily: 'Cynatar',
            textShadow:
              '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
          }}
        >
          Evan Koumarelas
        </h1>
      </div>
      <div></div>
      <div className='cat-fade'>
        <Music />
      </div>
      <div className='cat-fade'>
        <Photography />
      </div>
      <div className='cat-fade'>
        <Contact />
      </div>
    </div>
  );
}
