import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NotFound } from '@/pages/404';

const Blogs = React.lazy(() => import('@/pages/blogs'));
const Home = React.lazy(() => import('@/pages/home'));
const Projects = React.lazy(() => import('@/pages/projects'));
const Map = React.lazy(() => import('@/pages/map'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC<Record<string, never>> = () => {
  return (
    <div className="selection:bg-secondary selection:text-subtle min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="main-content container flex-grow max-w-screen-xl px-5 m-auto mt-16 sm:px-12 md:px-20">
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/blog/*" element={<Blogs />} />
              <Route path="/map" element={<Map />} />
              <Route path="/projects/*" element={<Projects />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
