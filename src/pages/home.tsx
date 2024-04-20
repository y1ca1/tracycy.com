import React from 'react';
import Fries from '@/assets/pics/fries.svg';
import { ProjectGrid } from '@/components/projectGrid';

const RoundedSquare = () => (
  <div aria-hidden="true">
    <div className="relative h-80 md:h-96 lg:h-136 lg:w-136 ">
      <svg
        className="h-full w-full fill-current text-orange-50 dark:text-gray-200"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="8" />
      </svg>
    </div>
  </div>
);

const Home = (): JSX.Element => (
  <>
    <div className="flex flex-col items-start mt-12 mb-16  lg:justify-between ">
      <p className="mt-12 text-3xl font-semibold  sm:text-4xl text-left">
        I study programming languages, systems, and security at
        <a
          href="https://www.cmu.edu/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          Carnegie Mellon University
        </a>{' '}
        . I'm currently working at{' '}
        <a
          href="https://www.cylab.cmu.edu/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          CyLab
        </a>{' '}
        with Prof.{' '}
        <a
          href="https://www.andrew.cmu.edu/user/bparno/"
          className="text-secondary hover:text-primary underline"
        >
          Bryan Parno
        </a>{' '}
        and Prof.{' '}
        <a
          href="https://www.andrew.cmu.edu/user/liminjia/"
          className="text-secondary hover:text-primary underline"
        >
          Limin Jia
        </a>
        .
      </p>
      <p className="mt-12 text-xl font-semibold  sm:text-2xl text-left">
        I will be joining{' '}
        <a
          href="https://plum-umd.github.io/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          PLUM@UMD
        </a>
        , University of Maryland, College Park as a CS PhD student in Fall 2024.
      </p>

      {/* <div className='relative '> */}
      {/*   <RoundedSquare /> */}
      {/*   <div className='absolute top-0 flex items-center justify-center w-full h-full'> */}
      {/*     <div className='w-80 h-80 overflow-hidden rounded-lg md:h-96 md:w-96 lg:h-136 lg:w-136 '> */}
      {/*       <Fries className='w-80 h-80 md:h-96 md:w-96 lg:w-136 lg:h-136' /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
    <ProjectGrid />
  </>
);

export default Home;
