import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';
import { SpikeBounce } from '@/components/spike';
import { BlogTabs } from '@/components/blogTabs';
import { NotFound } from '@/pages/404';
import { TableOfContents } from '@/components/tableOfContents';
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

const BlogLayout = (): JSX.Element => (
  <div className="relative flex justify-between mt-12 mb-12 flex-row-reverse">
    <aside className="sticky hidden h-screen max-w-xs mt-8 ml-6 top-16 lg:block">
      <TableOfContents />
    </aside>
    <article className="max-w-2xl xl:max-w-3xl min-w-0 text-base lg:text-lg ">
      <Outlet />
    </article>
  </div>
);

const Blogs = (): JSX.Element => (
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
        <Route element={<BlogLayout />}>
          <Route
            path="my-personal-website"
            element={React.useMemo(
              () => (
                <MyPersonalWebsite components={components} />
              ),
              [],
            )}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default Blogs;
