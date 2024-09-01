import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RotatingSquare } from 'react-loader-spinner';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NotFound } from '@/pages/404';
const Blogs = React.lazy(() => import('@/pages/blogs'));
const Home = React.lazy(() => import('@/pages/home'));
const Projects = React.lazy(() => import('@/pages/projects'));
const Map = React.lazy(() => import('@/pages/map'));
const About = React.lazy(() => import('@/pages/about'));
const CV = React.lazy(() => import('@/pages/cv'));

const App: React.FC<Record<string, never>> = () => {
  const currentThemeMode = useThemeMode()[0];

  return (
    <div className=" selection:bg-secondary selection:text-subtle">
      {currentThemeMode === ThemeMode.Dark ? (
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-shades-of-purple.min.css"
        />
      ) : (
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-light.min.css"
        />
      )}
      <Router>
        <Header />
        <main className="main-content container flex-grow max-w-screen-xl px-5 m-auto mt-16 sm:px-12 md:px-20">
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
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/blog/*" element={<Blogs />} />
              <Route path="/map" element={<Map />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/cv" element={<CV />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
