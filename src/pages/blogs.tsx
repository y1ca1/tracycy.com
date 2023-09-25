import React from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';
import { SpikeBounce } from '@/components/spike';
import { BlogTabs } from '@/components/blogTabs';
import { TableOfContents } from '@/components/tableOfContents';
import { components } from '@/components/mdxComponents';
const MyPersonalWebsite = React.lazy(
  () => import('@/contents/blogs/my-personal-website.mdx'),
);
const FPL = React.lazy(() => import('@/contents/blogs/fpl.mdx'));
const LLExternalVsInternalChoice = React.lazy(
  () => import('@/contents/blogs/ll-external-vs-internal-choice.mdx'),
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

const BlogLayout = (): JSX.Element => {
  const { blogName } = useParams();

  const ContentSwitch = ({ name }: { name?: string }) => {
    switch (name) {
      case 'my-personal-website':
        return <MyPersonalWebsite components={components} />;
      case 'fpl':
        return <FPL components={components} />;
      case 'll-external-vs-internal-choice':
        return <LLExternalVsInternalChoice components={components} />;
      default:
        return <Navigate to="/blog" replace={true} />;
    }
  };

  return (
    <div className="relative flex justify-between mt-12 mb-12 flex-row-reverse">
      <aside className="sticky hidden overflow-auto h-128 max-w-xs mt-8 ml-6 top-16 lg:block">
        <TableOfContents />
      </aside>
      <article className="max-w-2xl xl:max-w-3xl min-w-0 text-base lg:text-lg ">
        <ContentSwitch name={blogName} />
      </article>
    </div>
  );
};

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
        <Route path=":blogName" element={<BlogLayout />} />
      </Route>
    </Routes>
  </React.Suspense>
);

export default Blogs;
