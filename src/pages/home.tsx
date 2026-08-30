import React from 'react';
import { RecentPubs } from '@/components/projectGrid';

const Home = (): JSX.Element => (
  <>
    <div className="flex flex-col items-start mt-12 mb-16 lg:justify-between">
      <p className="mt-12 text-xl font-medium sm:text-xl text-left leading-relaxed">
        Hi! I'm Yi, a second-year Ph.D. student in Computer Science at the{' '}
        <a
          href="https://umd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary underline"
        >
          University of Maryland, College Park
        </a>
        . I am a member of{' '}
        <a
          href="https://plum-umd.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary underline"
        >
          PLUM@UMD
        </a>{' '}
        and advised by Prof.{' '}
        <a
          href="https://msurbatovich.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary underline"
        >
          Milijana Surbatovich
        </a>
        . Meanwhile, I also work closely with Prof.{' '}
        <a
          href="https://www.andrew.cmu.edu/user/bparno/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary underline"
        >
          Bryan Parno
        </a>{' '}
        at{' '}
        <a
          href="https://www.cmu.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-primary underline"
        >
          Carnegie Mellon University
        </a>
        .
        <br />
        <br />I am interested in building correct and secure
        systems/architectures in principled ways, leveraging programming
        languages and formal methods. Recently, I have been building verified,
        secure, performant parsers and serializers, as well as type systems and
        a verified, optimizing compiler for dataflow architectures.
      </p>
    </div>
    <RecentPubs />
  </>
);

export default Home;
