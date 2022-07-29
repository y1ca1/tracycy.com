import { MDXComponents } from 'mdx/types';
import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Image } from '@/components/image';

/**
 * Styling for the MDX components
 * Credit to [Jeff](https://jeffjadulco.com/).
 * */
export const components: MDXComponents = {
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <a
          {...props}
          className="underline text-secondary hover:text-accent focus-visible:outline-accent focus-visible:text-accent"
          href={href}
          target="_blank"
          rel="noopener"
        />
      );
    }

    if (href.startsWith('#')) {
      return (
        <a
          {...props}
          href={href}
          className="ml-1 transition-transform duration-75 ease-out origin-left transform scale-0 opacity-0 text-secondary hover:text-accent group-hover:scale-100 group-hover:opacity-100 focus-visible:outline-accent focus-visible:text-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      );
    }

    return (
      <Link to={href}>
        <a
          {...props}
          className="underline text-secondary hover:text-accent focus-visible:outline-accent focus-visible:text-accent"
        />
      </Link>
    );
  },
  strong: ({ ...props }) => <strong {...props} className="font-semibold" />,
  h1: ({ ...props }) => {
    return (
      <h1
        {...props}
        className="mb-10 text-4xl lg:text-5xl font-extrabold tracking-tight text-primary"
      />
    );
  },
  h2: ({ ...props }) => {
    return (
      <h2
        {...props}
        className="flex items-baseline mb-8 text-3xl font-bold leading-10 group mt-14 lg:text-3xl text-accent"
        data-heading
      />
    );
  },
  h3: ({ ...props }) => {
    return (
      <h3
        {...props}
        className="flex items-baseline mb-4 text-2xl font-bold leading-tight group mt-14 text-accent"
        data-heading
      />
    );
  },
  p: ({ ...props }) => {
    return <span {...props} className="my-6 leading-7 lg:leading-8" />;
  },
  em: ({ ...props }) => {
    return <em {...props} className="italic" />;
  },
  hr: ({ ...props }) => {
    return <hr {...props} className="my-10 border-accent" />;
  },
  blockquote: ({ ...props }) => {
    return (
      <blockquote
        {...props}
        className="px-5 py-2 my-6 rounded-lg text-base text-secondary border-l-4 lg:-ml-6 bg-stone-200 dark:bg-gray-800 border-accent"
      />
    );
  },
  ul: ({ ...props }) => (
    <ul className="mb-4 leading-relaxed list-disc list-inside" {...props} />
  ),
  ol: ({ ...props }) => (
    <ol className="pl-4 my-6 leading-7 list-decimal" {...props} />
  ),
  li: ({ ...props }) => <li className="mt-3" {...props} />,
  pre: ({ className, ...props }) => (
    <pre className={classNames(className, 'rounded-lg')} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code className={classNames(className, 'text-secondary')} {...props} />
  ),
  img: ({ src, alt, title, ...props }) => {
    // this is a hack to get the title from the alt attribute and get anything else
    // (e.g. classNames) from the title attribute
    return (
      <>
        {alt ? (
          <figure>
            <figcaption className="text-accent font-semibold">
              {alt}:{' '}
            </figcaption>
            <Image
              className={classNames(title?.split(' '))}
              location={src as string}
              {...props}
            />
          </figure>
        ) : (
          <Image
            className={classNames(title?.split(' '))}
            location={src as string}
            {...props}
          />
        )}
      </>
    );
  },
  table: ({ ...props }) => (
    <table
      className="border-separate border-spacing-2 border border-accent"
      {...props}
    />
  ),
  td: ({ ...props }) => <td className="border border-accent" {...props} />,
  th: ({ ...props }) => <th className="border border-accent" {...props} />,
};
