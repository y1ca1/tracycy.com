import React from 'react';
import NemoFish from '@/assets/icons/projects/nemo.svg';
import Grin from '@/assets/icons/projects/grin.svg';
import Tetris from '@/assets/icons/projects/tetris.svg';
import SearchEngine from '@/assets/icons/projects/search-engine.svg';
import Events from '@/assets/icons/projects/events.svg';
import TypeInference from '@/assets/icons/projects/type-inference.svg';
import CY from '@/assets/icons/projects/cy.svg';
import HandRecognition from '@/assets/icons/projects/hand-recog.svg';
import Music2Score from '@/assets/icons/projects/music2score.svg';

export interface ProjectInfo {
  name: string;
  icon: React.ReactNode;
  description: string;
  link: string;
}

export const projects: ProjectInfo[] = [
  {
    name: 'Hand Gesture Recognition',
    icon: <HandRecognition className="w-2/3 h-2/3" />,
    description: `Deep learning is smoking hot and I love all the fancy image processing techniques,
     so how about implementing one of my own? This is a pytorch implementation of a three-layer CNN model on hand gesture recognition that can recognize hand gestures from digit 0 to 9.`,
    link: 'https://github.com/Tracyee/cnn-based-gesture-recognition',
  },
  {
    name: 'Nemo fish segmentation',
    icon: <NemoFish className="w-2/3 h-2/3" />,
    description: `Clown fish is cute, but I don't like the annoying backgrounds and want to remove it.
     It turns out Bayes classifier can do exactly this type of image segmentation tasks.`,
    link: 'https://github.com/Tracyee/bayes-classifier-on-image-segmentation',
  },
  {
    name: 'Sentiment Analysis',
    icon: <Grin className="w-2/3 h-2/3" />,
    description: `Enough of the traditional machine learning techniques, I want to try some state of the art neural networks
    so I did an empirical evaluation of deep learning algorithms on Sentiment Analysis;)`,
    link: 'https://github.com/Tracyee/waterloo-cs680-project',
  },
  {
    name: 'Music to Score',
    icon: <Music2Score className="w-2/3 h-2/3" />,
    description: `I also want to grab some full-stack software engineering and Agile methodology practices. So I joined a team of developers to build the
    a music to score converter web app that can facilitate the ability to generate sheet music from midi files.`,
    link: 'https://github.com/music2score/music2score',
  },
  {
    name: 'Biquadris',
    icon: <Tetris className="w-2/3 h-2/3" />,
    description:
      'And also some OOP and design patterns! So I built an enhanced game of tetris utilizing Observer, Factory, and Strategy patterns.',
    link: './',
  },
  {
    name: 'Search Engine',
    icon: <SearchEngine className="w-2/3 h-2/3" />,
    description:
      'Ok, I realized that developing software systems seems more fun for me than exploring ML/DL/NN. So to gain more practices I built an offline search engine with BM25 ranking algorithm.',
    link: 'https://github.com/Tracyee/search-engine25',
  },
  {
    name: 'HM Type Inference System',
    icon: <TypeInference className="w-2/3 h-2/3" />,
    description:
      'This one got some fun history. I initially got a 60 for my Static Analysis for Software Engineering course and was asked to redo my course project. So I reached out to my friend and he suggested me to do this -- Hindley Milner based type inference system with equi-recursive types. This is when I started to love type systems! (And also rose my grade to 84 😅)',
    link: 'https://github.com/Tracyee/hindley-milner-equiRec',
  },
  {
    name: 'Event Booking Web App',
    icon: <Events className="w-2/3 h-2/3" />,
    description: `After half years' industrial software developing experience, I really fell in love with Javascript and wanted to build a complete web app using all the fatastic open-source npm packages. So I did this event booking app using GraphQL.js, Node.js, MongoDB, React.js. And I love types so all of backend/frontend codes are written in Typescript`,
    link: 'https://github.com/Tracyee/graphql-app',
  },
  {
    name: 'My personal website',
    icon: <CY className="w-2/3 h-2/3" />,
    description:
      'I think it is time to wrap up my journey so far as a software engineer, and also I want my own space to share my experience and thoughts. So, introducing my new personal website!',
    link: 'https://github.com/Tracyee/tracycy.com',
  },
];
