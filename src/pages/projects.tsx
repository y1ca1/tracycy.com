/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import { LightBulbIcon } from '@heroicons/react/solid';
import { SpikeBounce } from '@/components/spike';
import { ProjectPathV1 } from '@/components/projectPath';
import { TableOfContents } from '@/components/tableOfContents';
import { components } from '@/components/mdxComponents';
const Malloc = React.lazy(() => import('@/contents/projects/malloc.mdx'));
const Biquadris = React.lazy(() => import('@/contents/projects/biquadris.mdx'));
const HM = React.lazy(() => import('@/contents/projects/hm.mdx'));
const Vest = React.lazy(() => import('@/contents/projects/vest.mdx'));

const Index = (): JSX.Element => {
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
            content="Click the icons to peek my transition along the path."
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

const renderProjectContent = (name?: string) => {
  switch (name) {
    case 'malloc':
      return <Malloc components={components} />;
    case 'biquadris':
      return <Biquadris components={components} />;
    case 'hindley-milner-inference':
      return <HM components={components} />;
    case 'vest':
      return <Vest components={components} />;
    default:
      return <Navigate to="/projects" replace={true} />;
  }
};

const ProjectLayout = (): JSX.Element => {
  const { projectName } = useParams();

  return (
    <div className="relative flex justify-between mt-12 mb-12 flex-row-reverse">
      <aside className="sticky hidden overflow-auto h-128 max-w-xs mt-8 ml-6 top-16 lg:block">
        <TableOfContents />
      </aside>
      <article className="max-w-2xl xl:max-w-3xl min-w-0 text-base lg:text-lg">
        {renderProjectContent(projectName)}
      </article>
    </div>
  );
};

const Projects = (): JSX.Element => (
  <React.Suspense
    fallback={
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    }
  >
    <Routes>
      <Route path="/">
        <Route index element={<Index />} />
        <Route path=":projectName" element={<ProjectLayout />} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default Projects;
