import React from 'react';
import Fries from '@/assets/pics/fries.svg';
import { SpikeAnimate } from '@/components/spike';

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

export const Home = (): JSX.Element => (
  <div className="flex flex-col-reverse items-center mt-12 lg:flex-row lg:justify-between lg:space-x-6">
    <p className="max-w-3xl mt-12 text-3xl font-semibold text-right lg:mt-0 sm:text-4xl sm:text-left md:text-center lg:text-left">
      I'm Yi, a fervent software engineer, lifelong learner, and sometimes
      <br /> a jerk.
    </p>
    <div className="relative ">
      <RoundedSquare />
      <div className="absolute top-0 flex items-center justify-center w-full h-full">
        <div className="w-80 h-80 overflow-hidden rounded-lg md:h-96 md:w-96 lg:h-136 lg:w-136 ">
          <Fries className="w-80 h-80 md:h-96 md:w-96 lg:w-136 lg:h-136" />
        </div>
      </div>
    </div>
  </div>
);
