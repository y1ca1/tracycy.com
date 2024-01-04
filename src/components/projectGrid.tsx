import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'flowbite-react';
import biquadrisUrl from '@/assets/pics/projects/biquadris.png';
import mallocUrl from '@/assets/pics/projects/malloc.png';
import searchEngineUrl from '@/assets/pics/projects/search-engine.png';
import sentimentUrl from '@/assets/pics/projects/sentiment.png';
import hmUrl from '@/assets/pics/projects/hm.png';
import eventsUrl from '@/assets/pics/projects/events.png';
import cyUrl from '@/assets/pics/projects/cy.png';

export const ProjectGrid = () => (
  <>
    <h1 className="py-12 mb-3 text-3xl font-bold leading-tight text-center md:text-4xl">
      Past Projects
    </h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      <div className="max-w-sm">
        <Link to="../projects/my-personal-website">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={cyUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
              <h5 className="text-2xl font-bold tracking-tight text-primary ">
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
                <Badge color="info">Headless UI</Badge>
                <Badge color="info">Flowbite</Badge>
                <Badge color="info">ESBuild</Badge>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="max-w-sm">
        <Link to="../projects/event-booking-web-app">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={eventsUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
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
            </div>
          </div>
        </Link>
      </div>
      <div className="max-w-sm">
        <Link to="../projects/hindley-milner-inference">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={hmUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
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
            </div>
          </div>
        </Link>
      </div>
      <div className="max-w-sm">
        <Link to="../projects/biquadris">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={biquadrisUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
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
            </div>
          </div>
        </Link>
      </div>
      <div className="max-w-sm">
        <Link to="../projects/search-engine">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={searchEngineUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
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
            </div>
          </div>
        </Link>
      </div>
      <div className="max-w-sm">
        <Link to="../projects/malloc">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={mallocUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
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
            </div>
          </div>
        </Link>
      </div>
      <div className="max-w-sm ">
        <Link to="../projects/sentiment-analysis">
          <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col transition duration-300 ease-in-out hover:ring-4 hover:ring-opacity-60 hover:ring-offset-2 hover:ring-pink-400/75">
            <img
              src={sentimentUrl}
              alt="my-personal-website"
              className="rounded-t-lg"
            />
            <div className="flex h-full flex-col justify-center gap-4 p-6">
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
            </div>
          </div>
        </Link>
      </div>
    </div>
  </>
);
