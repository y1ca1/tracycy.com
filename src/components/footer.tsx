import React from 'react';
import { NavLink } from 'react-router-dom';
import GithubAlt from '@/assets/icons/github-alt.svg';
import LinkedInBlack from '@/assets/icons/linkedin-black.svg';
import EmailBlack from '@/assets/icons/email-black.svg';

const FOOTER_NAVIGATION = [
  { name: 'Blog', href: '/blog' },
  { name: 'Map', href: '/map' },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full h-56 overflow-hidden bg-primary text-secondary">
      <div className="container h-full px-5 pt-24 pb-12 m-auto md:max-w-screen-md lg:max-w-screen-xl md:px-20">
        <div className="container flex-col justify-between md:space-y-8">
          <nav className="flex-row items-center justify-center hidden space-x-6 text-md lg:flex md:justify-end ">
            {FOOTER_NAVIGATION.map(nav => (
              <NavLink
                key={nav.name}
                to={nav.href}
                className={({ isActive }) =>
                  isActive ? 'text-accent' : 'hover:text-accent'
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col-reverse space-y-8 space-y-reverse md:flex-row md:justify-between md:space-y-0">
            <span
              className="self-center text-sm tracking-wider md:self-end"
              aria-label="Copyright"
            >
              {`© ${React.useMemo(
                () => new Date().getFullYear(),
                [],
              )} Yi Cai. All Rights Reserved.`}
            </span>
            <div className="flex flex-row items-center justify-center space-x-6 md:justify-end">
              <span>
                <a
                  href="https://github.com/y1ca1"
                  aria-label="Visit GitHub profile"
                  title="GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-accent focus:text-accent"
                >
                  <GithubAlt className="w-8 h-8 transition-transform ease-in-out hover:-translate-y-1 hover:text-accent fill-accent" />
                </a>
              </span>
              <span>
                <a
                  href="mailto:yicai@cs.umd.edu"
                  aria-label="Email yicai@cs.umd.edu"
                  title="Email"
                  className="focus-visible:outline-accent focus:text-accent"
                >
                  <EmailBlack className="w-8 h-8 transition-transform ease-in-out hover:-translate-y-1 hover:text-accent fill-accent" />
                </a>
              </span>
              <span>
                <a
                  href="https://linkedin.com/in/yicai27"
                  aria-label="Visit Linkedin profile"
                  title="Linkedin profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-accent focus:text-accent"
                >
                  <LinkedInBlack className="w-8 h-8 mb-2 transition-transform ease-in-out hover:-translate-y-1 hover:text-accent fill-accent" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
