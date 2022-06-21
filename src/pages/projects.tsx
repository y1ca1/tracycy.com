import React from 'react';
import { Card, Tooltip, Badge } from 'flowbite-react';
import { LightBulbIcon } from '@heroicons/react/solid';
import { SpikeBounce } from '@/components/spike';
import { ProjectPathV1 } from '@/components/projectPath';
import biquadrisUrl from '@/assets/pics/projects/biquadris.png';
import mallocUrl from '@/assets/pics/projects/malloc.png';
import searchEngineUrl from '@/assets/pics/projects/search-engine.png';
import sentimentUrl from '@/assets/pics/projects/sentiment.png';
import hmUrl from '@/assets/pics/projects/hm.png';
import eventsUrl from '@/assets/pics/projects/events.png';
import cyUrl from '@/assets/pics/projects/cy.png';

export const Projects = (): JSX.Element => {
  return (
    <>
      <SpikeBounce />
      <section className="px-4 pt-12 pb-24 mx-auto max-w-7xl">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
          My personal project journey!
        </h1>
        <p className="mb-12 text-lg text-center ">
          A pathway to find what I'm trully passionate about.
        </p>
        <div className="flex justify-center pb-12">
          <Tooltip
            content="Click the icons to peak my thoughts on the projects!"
            animation="duration-500"
            style="auto"
          >
            <LightBulbIcon className="h-8 w-8 text-yellow-400 dark:text-yellow-300" />
          </Tooltip>
        </div>
        <ProjectPathV1 />
        <h1 className="py-12 mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
          My featured projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="max-w-sm">
            <Card imgSrc={cyUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Personal Website
              </h5>
              <p className="font-normal text-secondary">
                My lively, lovely, and fully responsive personal website that
                features dark mode!
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">React</Badge>
                <Badge color="info">React Router</Badge>
                <Badge color="info">Typescript</Badge>
                <Badge color="info">MDX</Badge>
                <Badge color="info">TailwindCSS</Badge>
                <Badge color="info">Flowbite</Badge>
                <Badge color="info">ESBuild</Badge>
              </div>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={eventsUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Event Booking Web App
              </h5>
              <p className="font-normal text-secondary">
                A complete event booking App that features user authentication,
                creating events, booking events, and cancelling events.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">React</Badge>
                <Badge color="info">React Router</Badge>
                <Badge color="info">Typescript</Badge>
                <Badge color="info">ChakraUI</Badge>
                <Badge color="info">Node.js</Badge>
                <Badge color="info">GraphQL</Badge>
                <Badge color="info">MongoDB</Badge>
                <Badge color="info">Mongoose</Badge>
                <Badge color="info">Webpack</Badge>
              </div>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={hmUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Hindley Milner Type Inference System
              </h5>
              <p className="font-normal text-secondary">
                Hindley Milner based type inference system with equi-recursive
                types
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">Type Polymorphism</Badge>
                <Badge color="info">Static Analysis</Badge>
                <Badge color="info">Union Find</Badge>
                <Badge color="info">Python</Badge>
              </div>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={biquadrisUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Biquadris
              </h5>
              <p className="font-normal text-secondary">
                An enhanced game of tetris that can be played by 2 players.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">Observer</Badge>
                <Badge color="info">Factory</Badge>
                <Badge color="info">Strategy</Badge>
                <Badge color="info">C++</Badge>
                <Badge color="info">X Windows</Badge>
              </div>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={searchEngineUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Search Engine
              </h5>
              <p className="font-normal text-secondary">
                A Los Angeles Times offline search engine
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">BM25</Badge>
                <Badge color="info">Inverted Index</Badge>
                <Badge color="info">Python</Badge>
                <Badge color="info">Qt</Badge>
              </div>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={mallocUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Malloc
              </h5>
              <p className="font-normal text-secondary">
                An efficient and fast dynamic memory allocator with segregated
                free lists and mini-block enabled
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">C</Badge>
                <Badge color="info">Linked List</Badge>
              </div>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={sentimentUrl}>
              <h5 className="text-2xl font-bold tracking-tight text-primary">
                Sentiment Analysis
              </h5>
              <p className="font-normal text-secondary">
                An empirical comparison of binary and fine-grained sentiment
                analysis using deep neural networks
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge color="info">NLP</Badge>
                <Badge color="info">CNN</Badge>
                <Badge color="info">LSTM</Badge>
                <Badge color="info">BERT</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};
