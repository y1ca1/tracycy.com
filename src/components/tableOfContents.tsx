import React from 'react';
import classNames from 'classnames';

/**
 * Imperically add a table of contents
 * Credit to [Jeff](https://jeffjadulco.com/).
 * */
export const TableOfContents = () => {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]'),
    );
    setHeadings(headingElements);
  }, []);

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName: string): number => {
    return Number(nodeName.replace('H', ''));
  };

  return (
    <nav className="toc text-subtle">
      <h2 className="mb-2 text-2xl font-bold text-accent tracking-widestest">
        Table of Contents
      </h2>

      {headings.map(heading => {
        return (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={classNames(
              'block mt-3 text-base hover:text-accent focus-visible:outline-accent',
              {
                'ml-3': getLevel(heading.nodeName) === 3,
              },
            )}
          >
            {heading.innerText}
          </a>
        );
      })}
    </nav>
  );
};
