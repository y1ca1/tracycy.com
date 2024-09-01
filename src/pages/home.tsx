import React from 'react';
import Fries from '@/assets/pics/fries.svg';
import { RecentProjectGrid, PastProjectGrid } from '@/components/projectGrid';

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
      <p className="mt-12 text-xl font-medium  sm:text-xl text-left">
        Hi! I'm Yi, a first-year Ph.D. student in Computer Science at the{' '}
        <a
          href="https://umd.edu/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          University of Maryland, College Park
        </a>{' '}
        . I am a member of{' '}
        <a
          href="https://plum-umd.github.io/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          PLUM@UMD
        </a>{' '}
        and currently advised by Prof.{' '}
        <a
          href="https://msurbatovich.github.io/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          Milijana Surbatovich
        </a>{' '}
        . I am broadly interested in the theory and practice of programming
        languages, especially type theory and type systems, constructive logics,
        formal methods, and their application in various computing systems.
        Previously, I received my M.S. in Electrical and Computer Engineering
        from{' '}
        <a
          href="https://www.cmu.edu/"
          className="text-secondary hover:text-primary underline"
        >
          {' '}
          Carnegie Mellon University
        </a>{' '}
        , where I worked at{' '}
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
        </a>{' '}
        on Rust and formal verification.
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
    <RecentProjectGrid />
    <PastProjectGrid />
  </>
);

export default Home;
