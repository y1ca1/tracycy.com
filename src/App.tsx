import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Education } from '@/pages/education';
import { Blog } from '@/pages/blog';
import { NotFound } from '@/pages/404';
import { Home } from '@/pages/home';
import { Projects } from '@/pages/projects';
import { Experience } from '@/pages/experience';
import { Coursework } from '@/pages/coursework';

const App: React.FC<Record<string, never>> = () => (
  <Router>
    <Header />
    <main className="main-content container flex-grow max-w-screen-xl px-5 m-auto mt-16 sm:px-12 md:px-20">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coursework" element={<Coursework />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
