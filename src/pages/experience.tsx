import React from 'react';
import { Tooltip } from 'flowbite-react';
import { LightBulbIcon } from '@heroicons/react/solid';
import { SpikeBounce } from '@/components/spike';
import { LifeMap } from '@/components/lifeMap';

export const Experience = (): JSX.Element => {
  return (
    <div>
      <SpikeBounce />
      <section className="px-4 pt-12 pb-24 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
          My Life Journey in Map
        </h1>
        <p className="mb-12 text-lg text-center ">
          A kid born and raised up in{' '}
          <a
            href="https://en.wikipedia.org/wiki/Yueyang"
            target="_blank"
            className="underline"
          >
            Yueyang, Hunan, China
          </a>
          , trying to discover the world and enjoy every moment of life.
        </p>
        <div className="flex justify-center pb-12">
          <Tooltip
            content="Hover on the icons to peak my life checkpoints!"
            animation="duration-500"
            style="auto"
          >
            <LightBulbIcon className="h-8 w-8 text-yellow-400 dark:text-yellow-300" />
          </Tooltip>
        </div>
        <div className="flex justify-center container shadow-2xl shadow-stone-600 dark:shadow-gray-900">
          <LifeMap />
        </div>
      </section>
    </div>
  );
};
