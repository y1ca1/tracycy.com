import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';
import { SpikeBounce } from '@/components/spike';
import { BlogTabs } from '@/components/blogTabs';
import { NotFound } from '@/pages/404';
import { components } from '@/components/mdxComponents';
const MyPersonalWebsite = React.lazy(
  () => import('@/contents/blogs/my-personal-website.mdx'),
);

const Index = (): JSX.Element => (
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

export const Blogs = (): JSX.Element => (
  <React.Suspense
    fallback={
      <RotatingSquare
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
      />
    }
  >
    <Routes>
      <Route path="/">
        <Route index element={<Index />} />
        <Route
          path="my-personal-website"
          element={React.useMemo(
            () => (
              <MyPersonalWebsite components={components} />
            ),
            [],
          )}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </React.Suspense>
);
