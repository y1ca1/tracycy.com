import React from 'react';
import { Modal, Button } from 'flowbite-react';
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
}: ProjectModalProps): JSX.Element => {
  return (
    <React.Fragment>
      {/* <div className="flex flex-wrap gap-4">
        <Button onClick={onClick}>Toggle modal</Button>
      </div> */}
      <Modal show={show} size="md" onClose={onClose}>
        <Modal.Header>{project.name}</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center space-y-6 p-6">
            {project.icon}
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </Modal.Body>

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
      </Modal>
    </React.Fragment>
  );
};
