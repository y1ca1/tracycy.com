import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import GithubAlt from '@/assets/icons/github-alt.svg';
import ReadMe from '@/assets/icons/readme.svg';
import { ProjectInfo } from '@/data/projects';

export interface ProjectModalProps {
  show: boolean;
  project: ProjectInfo;
  onClose: VoidFunction;
}

export const ProjectModal = ({
  show,
  project,
  onClose,
}: ProjectModalProps): JSX.Element => (
  <Transition show={show} as={Fragment}>
    <Dialog
      as="div"
      className="relative z-10 selection:bg-secondary selection:text-subtle"
      onClose={onClose}
    >
      {/*
      Use one Transition.Child to apply one transition to the backdrop...
    */}
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      {/*
      ...and another Transition.Child to apply a separate transition
      to the contents.
    */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary p-6 align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-xl font-semibold leading-6 text-center text-primary"
              >
                {project.name}
              </Dialog.Title>

              <Dialog.Description as="div" className="text-left">
                <div className="flex flex-col items-center space-y-6 p-6">
                  {project.icon}
                  <p className="text-base leading-relaxed text-secondary">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                  {project.link && (
                    <a
                      href={project.link}
                      aria-label="Visit Project GitHub Repository"
                      title="GitHub Repo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="bg-secondary border border-gray-300 hover:bg-stone-400 focus:ring-blue-300 disabled:hover:bg-white dark:border-gray-600 dark:hover:bg-accent dark:hover:border-gray-700 dark:focus:ring-gray-700 focus:!ring-2 group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
                        type="button"
                        tabIndex={0}
                      >
                        <span className="flex items-center rounded-md text-sm px-4 py-2">
                          <GithubAlt />
                          GitHub
                        </span>
                      </button>
                    </a>
                  )}
                  {project.href && (
                    <Link
                      to={project.href}
                      aria-label="Visit Project Documentation"
                      title="Project Documentation"
                    >
                      <button
                        className="bg-secondary border border-gray-300 hover:bg-stone-400 focus:ring-blue-300 disabled:hover:bg-white dark:border-gray-600 dark:hover:bg-accent dark:hover:border-gray-700 dark:focus:ring-gray-700 focus:!ring-2 group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg"
                        type="button"
                        tabIndex={1}
                      >
                        <span className="flex items-center rounded-md text-sm px-4 py-2">
                          <ReadMe className="px-1 py-1" />
                          README
                        </span>
                      </button>
                    </Link>
                  )}
                </div>
              </Dialog.Description>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);
