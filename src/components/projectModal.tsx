import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from 'flowbite-react';
import GithubAlt from '@/assets/icons/github-alt.svg';
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
    <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                  <Button color="gray">
                    <GithubAlt />
                    <a
                      href={project.link}
                      aria-label="Visit Project GitHub Repository"
                      title="GitHub Repo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </div>
              </Dialog.Description>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);
