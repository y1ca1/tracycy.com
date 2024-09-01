import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import avatarUrl from '@/assets/pics/me.jpg';
import CDark from '@/assets/icons/caiyi/letter-c-dark.svg';
import ADark from '@/assets/icons/caiyi/letter-a-dark.svg';
import IDark from '@/assets/icons/caiyi/letter-i-dark.svg';
import YDark from '@/assets/icons/caiyi/letter-y-dark.svg';
import CLight from '@/assets/icons/caiyi/letter-c-light.svg';
import ALight from '@/assets/icons/caiyi/letter-a-light.svg';
import ILight from '@/assets/icons/caiyi/letter-i-light.svg';
import YLight from '@/assets/icons/caiyi/letter-y-light.svg';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = (): JSX.Element => {
  const [navigation, setNavigation] = React.useState<Navigation[]>([
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Map', href: '/map', current: false },
    { name: 'CV', href: '/cv', current: false },
    // { name: 'Projects', href: '/projects', current: false },
    // { name: 'About', href: '/about', current: false },
  ]);

  const [currentThemeMode, setThemeMode] = useThemeMode();

  const toggleThemeMode = (checked = currentThemeMode === ThemeMode.Dark) =>
    setThemeMode(checked ? ThemeMode.Dark : ThemeMode.Light);

  return (
    <Disclosure as="nav" className="bg-primary ">
      {({ open }) => (
        <>
          <div className="max-w-screen-xl mx-auto pt-6 px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                <NavLink
                  to="/"
                  aria-label="Cai Yi's Website logo, go to homepage."
                >
                  <div
                    className="flex-shrink-0 flex items-center overflow-hidden transition-transform ease-in-out rounded-full hover:scale-125 hover:rotate-12"
                    onClick={() =>
                      setNavigation(
                        navigation.map(navs => ({
                          ...navs,
                          current: false,
                        })),
                      )
                    }
                  >
                    {currentThemeMode === ThemeMode.Dark ? (
                      <>
                        <YLight className="block h-8 w-auto" />
                        <ILight className="block h-8 w-auto" />
                        <CLight className="block h-8 w-auto" />
                        <ALight className="block h-8 w-auto" />
                        <ILight className="block h-8 w-auto" />
                      </>
                    ) : (
                      <>
                        <YDark className="block h-8 w-auto" />
                        <IDark className="block h-8 w-auto" />
                        <CDark className="block h-8 w-auto" />
                        <ADark className="block h-8 w-auto" />
                        <IDark className="block h-8 w-auto" />
                      </>
                    )}
                  </div>
                </NavLink>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((nav, index) => (
                      <NavLink
                        key={nav.name}
                        to={nav.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? 'bg-secondary text-primary'
                              : 'text-secondary transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-pink-300/50 hover:text-primary',
                            'px-3 py-2 rounded-md text-md font-medium',
                          )
                        }
                        aria-current={nav.current ? 'page' : undefined}
                        onClick={() =>
                          setNavigation(
                            navigation.map((navs, i) => ({
                              ...navs,
                              current: i === index,
                            })),
                          )
                        }
                      >
                        {nav.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                <button
                  aria-label="Toggle dark mode"
                  onKeyDown={e => e.code === 'Enter' && toggleThemeMode()}
                >
                  <DarkModeSwitch
                    className="h-8 w-8 md:h-12 md:w-12"
                    checked={currentThemeMode === ThemeMode.Dark}
                    onChange={toggleThemeMode}
                  />
                </button>
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                        src={avatarUrl}
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 mt-2 w-32 rounded-2xl shadow-lg dark:bg-gray-700 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                      <Menu.Item>
                        {({}) => (
                          <p className="dark:text-white text-gray-900 block px-4 py-2 text-sm">
                            My Chinese name is 蔡羿 (Ts'eye Yee).
                            <br />
                            People like to call me Yi (like the letter "E").
                          </p>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((nav, index) => (
                  <Disclosure.Button
                    key={nav.name}
                    className={classNames(
                      nav.current
                        ? 'bg-secondary text-primary'
                        : 'text-secondary hover:bg-gray-300 dark:hover:bg-pink-300/50 hover:text-primary',
                      'block px-3 py-2 rounded-md text-base font-medium',
                    )}
                    aria-current={nav.current ? 'page' : undefined}
                  >
                    <NavLink
                      className="py-2"
                      key={nav.name}
                      to={nav.href}
                      onClick={() =>
                        setNavigation(
                          navigation.map((item, i) => ({
                            ...item,
                            current: i === index,
                          })),
                        )
                      }
                    >
                      {nav.name}
                    </NavLink>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
