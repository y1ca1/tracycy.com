import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Blogs } from '@/pages/blogs';
import { NotFound } from '@/pages/404';
import { Home } from '@/pages/home';
import { Projects } from '@/pages/projects';
import { Experience } from '@/pages/experience';
import { About } from '@/pages/about';

const App: React.FC<Record<string, never>> = () => {
  const currentThemeMode = useThemeMode()[0];

  return (
    <div className=" selection:bg-secondary selection:text-subtle">
      {currentThemeMode === ThemeMode.Dark ? (
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-synthwave84.min.css"
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
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/blog/*" element={<Blogs />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects">
              <Route index element={<Projects />} />
            </Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
