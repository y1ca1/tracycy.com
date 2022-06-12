import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Education } from '@/pages/education';
import MainNavigation from '@/components/navigation/mainNav';
import { NotFound } from '@/pages/404';
import { Home } from '@/pages/home';
import { Projects } from '@/pages/projects';
import { Experience } from '@/pages/experience';
import { Coursework } from '@/pages/coursework';

const App: React.FC<Record<string, never>> = () => (
  <Router>
    <MainNavigation />
    <main className="main-content container flex-grow max-w-screen-lg px-5 m-auto mt-16 sm:px-12 md:px-20">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coursework" element={<Coursework />} />
      </Routes>
    </main>
  </Router>
);

export default App;
