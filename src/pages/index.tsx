'use client';
import anime from 'animejs';
import Head from 'next/head';
import { PowerGlitch } from 'powerglitch';
import { useEffect, useState } from 'react';

import FakeErrorScreen from '@/components/FakeErrorScreen/FakeErrorScreen';
import About from '@/components/sitesections/About';
import Contact from '@/components/sitesections/Contact';
import Guestbook from '@/components/sitesections/Guestbook';
import Music from '@/components/sitesections/Music';
import Photography from '@/components/sitesections/Photography';
import Projects from '@/components/sitesections/Projects';

export default function Home() {
  const [showFakeErrorScreen, setShowFakeErrorScreen] = useState(true);

  type GlitchControl = {
    startGlitch: () => void;
    stopGlitch: () => void;
  } | null;

  const GlitchComponent: React.FC = () => {
    const [glitchControl, setGlitchControl] = useState<GlitchControl>(null);

    useEffect(() => {
      const glitchTimeout = setTimeout(() => {
        const { startGlitch, stopGlitch } = PowerGlitch.glitch('.glitch', {
          playMode: 'manual',
          timing: {
            duration: 600,
          },
        });

        setGlitchControl({ startGlitch, stopGlitch });

        startGlitch();

        setTimeout(() => {
          stopGlitch();
        }, 8000);
      }, 4000);

      return () => {
        clearTimeout(glitchTimeout);
      };
    }, []);

    useEffect(() => {
      if (glitchControl) {
        const glitchElement = document.querySelector('.glitch');
        if (glitchElement) {
          glitchElement.addEventListener(
            'mouseenter',
            glitchControl.startGlitch
          );
          glitchElement.addEventListener(
            'mouseleave',
            glitchControl.stopGlitch
          );

          return () => {
            glitchElement.removeEventListener(
              'mouseenter',
              glitchControl.startGlitch
            );
            glitchElement.removeEventListener(
              'mouseleave',
              glitchControl.stopGlitch
            );
          };
        }
      }
    }, [glitchControl]);

    return (
      <div>
        {/* Your glitch element */}
        <div className='glitch'></div>
      </div>
    );
  };

  useEffect(() => {
    anime({
      targets: '.animate-fade-up',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutCubic',
      delay: (el, i) => i * 1000,
    });

    anime({
      targets: '.blur-screen',
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutCubic',
      delay: 6000,
    });

    anime({
      targets: '.black-fade',
      opacity: [0, 1],
      duration: 1,
      delay: 15000,
    });

    anime({
      targets: '.intro-fade',
      opacity: [0, 1],
      duration: 1,
      delay: 18000,
    });
    anime({
      targets: '.name-fade',
      opacity: [0, 1],
      duration: 1,
      delay: 19000,
    });

    anime({
      targets: '.cat-fade',
      opacity: [0, 1],
      duration: 1000,
      delay: 20000,
    });

    setTimeout(() => {
      setShowFakeErrorScreen(false);
      anime({
        opacity: [0, 1],
        backgroundColor: ['#000000', '#ffffff'],
      });
      document.body.style.overflow = 'hidden'; // Hide the scrollbar after black-fade
    }, 15000);
  }, []);

  return (
    <div
      style={{ height: '1200px' }}
      className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
    >
      <Head>
        <title>Evan Koumarelas</title>
        <link rel='icon' href='/e.ico' />
      </Head>
      <div className='black-fade fixed left-0 top-0 z-50 h-full w-full bg-black opacity-0'>
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
              className='intro-fade text-1xl md:text-1xl whitespace-nowrap text-center text-white lg:text-3xl xl:text-4xl'
              style={{
                fontFamily: 'Major',
                textShadow:
                  '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
              }}
            >
              This is the site of
            </h1>
            <br></br>
            <div>
              <h1
                className='glitch name-fade whitespace-nowrap text-center text-5xl text-white md:text-5xl lg:text-8xl xl:text-9xl'
                style={{
                  fontFamily: 'Cynatar',
                  textShadow:
                    '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
                }}
              >
                Evan Koumarelas
              </h1>
              <GlitchComponent />
            </div>
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
      </div>
      <header className='container mx-auto flex justify-center px-6 py-3'>
        <nav className='font-semibold text-white'>
          <ul className='flex'>
            <li className='mr-6'>
              <a href=''>Home</a>
            </li>
            <li className='mr-6'>
              <a href=''>About</a>
            </li>
            <li className='mr-6'>
              <a href=''>Education</a>
            </li>
            <li className='mr-6'>
              <a href=''>Projects</a>
            </li>
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='flex-grow-2 container mx-auto flex h-screen px-6 py-6'>
        <section id='home' className='text-center text-white'>
          <h1 className='animate-fade-up mt-32 pb-12 text-5xl font-bold'>
            Hi, I'm your average frontend dev
          </h1>
          <div className='mx-4 mt-3 text-xl md:mx-16'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='w-full md:w-1/3'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='animate-fade-up mx-auto my-8 mb-16 h-full w-48 text-xl md:mx-4 md:w-full'
                  src='images/happy-businessman.png'
                  alt='Image of a business dude'
                  style={{ animationDelay: '1600ms' }}
                />
              </div>
              <div className=' md:w-2/3'>
                <p
                  className='animate-fade-up mx-6 pb-7 text-xl md:mx-0'
                  style={{ animationDelay: '800ms' }}
                >
                  I can understand why some people may find programming to be a
                  boring profession. It often involves spending long hours
                  sitting in front of a computer screen, typing lines of code
                  that may seem repetitive and mundane. The process of debugging
                  code can also be frustrating and time-consuming, leading to a
                  feeling of being stuck in a never-ending loop of fixing
                  errors. However, I might be able to do something idk
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer
          className='fixed inset-x-0 bottom-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 text-center text-white'
          style={{ borderTop: '1px solid black' }}
        >
          <p>Designed and developed by Evan Koumarelas</p>
          <p>&copy; 2025 Evan Koumarelas. I will sue.</p>
        </footer>
      </main>
      {showFakeErrorScreen && (
        <div
          className='blur-screen fixed left-0 top-0 z-50 h-full w-full'
          style={{ opacity: 0, backdropFilter: 'blur(5px)' }}
        >
          <div
            className=' animate-fade-up'
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: '800ms',
            }}
          >
            <FakeErrorScreen />
          </div>
        </div>
      )}
    </div>
  );
}
