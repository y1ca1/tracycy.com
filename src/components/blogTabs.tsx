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
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Tech: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Life: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
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
                  'w-full rounded-lg py-2.5 text-base font-medium leading-5 ',
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
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-primary"
                  >
                    <h3 className="text-base font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-sm font-normal leading-4">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <Link
                      to="my-personal-website"
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
