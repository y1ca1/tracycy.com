import React from 'react';
import { Tooltip } from 'flowbite-react';
import { LightBulbIcon } from '@heroicons/react/solid';
import { SpikeBounce } from '@/components/spike';
import { ProjectPathV1 } from '@/components/projectPath';

export const Projects = (): JSX.Element => {
  return (
    <>
      <SpikeBounce />
      <section className="pt-12 pb-24 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
          My Personal Project Journey as a Map
        </h1>
        <p className="mb-12 text-lg text-center ">
          A pathway to find what I'm trully passionate about.
        </p>
        <div className="flex justify-center pb-12">
          <Tooltip
            content="Click the icons to peek my thoughts on the projects."
            animation="duration-500"
            style="auto"
          >
            <LightBulbIcon className="h-8 w-8 text-yellow-400 dark:text-yellow-300" />
          </Tooltip>
        </div>
        <ProjectPathV1 />
      </section>
    </>
  );
};
