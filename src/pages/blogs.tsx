import React from 'react';
import { SpikeBounce } from '@/components/spike';
import { BlogTabs } from '@/components/blogTabs';

export const Blogs = (): JSX.Element => {
  return (
    <>
      <SpikeBounce />
      <section className="pt-12 pb-4 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
          My Blog Posts
        </h1>
        <p className="mb-12 text-lg text-center ">
          A place where I can talk about everything, not just techs!
        </p>
      </section>
      <div className="flex justify-center">
        <BlogTabs />
      </div>
    </>
  );
};
