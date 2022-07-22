import React from 'react';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const BlogTabs = () => {
  const [categories] = React.useState({
    Recent: [
      {
        id: 1,
        url: 'my-personal-website',
        title: 'Introducing my personal website!',
        date: 'July 2022',
        commentCount: 0,
        likeCount: 0,
      },
    ],
    Tech: [
      {
        id: 1,
        url: 'my-personal-website',
        title: 'Introducing my personal website!',
        date: 'July 2022',
        commentCount: 0,
        likeCount: 0,
      },
    ],
    Life: [
      {
        id: 1,
        url: 'time-in-waterloo',
        title: 'My wonderful time in Waterloo',
        date: 'August 2022',
        commentCount: 0,
        likeCount: 0,
      },
    ],
  });

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-4xl px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-lg bg-white shadow-md dark:bg-gray-800 p-1">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }: { selected: boolean }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-lg font-medium leading-5 ',
                  'ring-white ring-opacity-60 ring-offset-2 ring-pink-400/75 focus:outline-none focus:ring-2',
                  selected ? 'bg-primary shadow' : 'hover:bg-primary ',
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-lg bg-white shadow-md dark:bg-gray-800 p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-pink-400/75 focus:outline-none focus:ring-2',
              )}
            >
              <ul>
                {posts.map(post => (
                  <li
                    key={post.url + String(post.id)}
                    className="relative rounded-md p-3 hover:bg-primary"
                  >
                    <h3 className="text-lg font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-sm font-normal leading-4">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.likeCount} likes</li>
                    </ul>

                    <Link
                      to={post.url}
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-pink-400/75 focus:z-10 focus:outline-none focus:ring-2',
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
