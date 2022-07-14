import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid';

interface AccordionProps
  extends React.PropsWithChildren<React.ComponentProps<'div'>> {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

export const Accordion = ({ children, title }: AccordionProps) => (
  <Disclosure as="div">
    {({ open }) => (
      <>
        <Disclosure.Button className="flex w-full justify-between border rounded-lg bg-inherit px-4 py-2 text-left text-sm lg:text-base font-medium hover:bg-primary focus:outline-none focus-visible:ring focus-visible:ring-pink-400/75 focus-visible:ring-opacity-75">
          <span>{title}</span>
          <ChevronDoubleUpIcon
            className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `}
          />
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary">
            {children}
          </Disclosure.Panel>
        </Transition>
      </>
    )}
  </Disclosure>
);
