import React from 'react';
import { isMobile } from 'react-device-detect';
import { Tooltip } from 'flowbite-react';
import { LightBulbIcon } from '@heroicons/react/solid';
import { SpikeBounce } from '@/components/spike';
import { LifeMap } from '@/components/lifeMap';
import { ExperienceList } from '@/components/experienceList';
import { ScrollToMap } from '@/components/scrollToMap';

export const Experience = (): JSX.Element => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  return (
    <div>
      <SpikeBounce />
      <div className="flex flex-row justify-between">
        {/* Dummy flex item */}
        <div className="flex w-1/12"></div>
        <section className="pt-12 pb-24 mx-auto max-w-7xl">
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
              content={
                isMobile
                  ? 'Click on the icons to peek my life checkpoints and double click on them to see the details.'
                  : 'Hover on the icons to peek my life checkpoints and click on them to see the details.'
              }
              animation="duration-500"
              style="auto"
            >
              <LightBulbIcon className="h-8 w-8 text-yellow-400 dark:text-yellow-300" />
            </Tooltip>
          </div>
          <div
            className="flex justify-center container shadow-2xl shadow-stone-600 dark:shadow-black"
            ref={mapRef}
          >
            <LifeMap />
          </div>
          <ExperienceList />
        </section>
        <div className="flex w-1/12">
          <ScrollToMap map={mapRef} />
        </div>
      </div>
    </div>
  );
};
