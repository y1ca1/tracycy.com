import React from 'react';
import { Card } from 'flowbite-react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import { Accordion } from '@/components/accordion';
import yysyzUrl from '@/assets/icons/experience/yysyz.png';
import uestcUrl from '@/assets/icons/experience/uestc.png';
import uestcWhiteUrl from '@/assets/icons/experience/uestc-white.png';
import uestcSeseUrl from '@/assets/icons/experience/uestc-sese.png';
import uglasgowUrl from '@/assets/icons/experience/UoG_colour.png';
import uglasgowWhiteUrl from '@/assets/icons/experience/UoG_keyline.png';
import PlusSign from '@/assets/icons/plus-sign.svg';
import Ualberta from '@/assets/icons/experience/ualberta.svg';
import ualbertaEngUrl from '@/assets/icons/experience/ualberta-eng.png';
import uwaterlooUrl from '@/assets/icons/experience/uwaterloo.png';
import cyphercorUrl from '@/assets/icons/experience/cyphercor.png';
import cmuUrl from '@/assets/icons/experience/cmu.png';

export const ExperienceList = () => {
  const currentThemeMode = useThemeMode()[0];

  return (
    <div className="flex flex-col space-y-10 justify-center mt-24 w-full ">
      <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
        <Card id="cmu">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <img className="h-auto w-1/2 md:w-1/3 lg:w-1/4 " src={cmuUrl} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-0.5 items-center">
              <h5 className="text-sm font-semibold italic ">
                Starting Sept. 2022: Pittsburgh, PA
              </h5>
            </div>
            <h5 className="text-lg lg:text-xl text-center font-bold ">
              M.S. in Electrical and Computer Engineering
            </h5>
          </div>
          <div className="mx-auto w-full rounded-2xl max-w-md lg:max-w-2xl space-y-2 ">
            <Accordion title="Courses">
              <div className="w-full pt-3 rounded-lg shadow-lg ">
                <ul className="divide-y-2 divide-accent">
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://www.diderot.one/courses/121"
                      target="_blank"
                    >
                      15-210: Parallel and Sequential Data Structures and
                      Algorithms (Planned)
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://web2.qatar.cmu.edu/cs/15312/"
                      target="_blank"
                    >
                      15-652: Foundations of Programming Languages (Planned)
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://www.synergylabs.org/courses/15-440/"
                      target="_blank"
                    >
                      15-640: Distributed Systems (Planned)
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a href="https://www.cs.cmu.edu/~213/" target="_blank">
                      15-213/18-613: Introduction to Computer Systems (ICS)
                    </a>
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Card>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
        <Card id="cyphercor">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <img
              className="h-auto w-1/2 md:w-1/3 lg:w-1/4 "
              src={cyphercorUrl}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-0.5 items-center">
              <h5 className="text-sm font-semibold italic ">
                Sept. 2021 - Now: Ottawa, ON
              </h5>
            </div>
            <h5 className="text-lg lg:text-xl text-center font-bold ">
              Software Development Engineer
            </h5>
          </div>
          <div className="mx-auto w-full rounded-2xl max-w-md lg:max-w-2xl space-y-2 ">
            <Accordion title="Spotlights">
              <div className="w-full pt-3 rounded-lg shadow-lg ">
                <h5 className="text-md font-bold pb-2 ">
                  <a
                    href="https://www.logintc.com"
                    target="_blank"
                    className="underline"
                  >
                    LoginTC Cloud: Simply Strong Two-Factor Authentication
                  </a>
                </h5>
                <ul className="divide-y-2 divide-accent">
                  <li className="p-3 hover:bg-primary ">
                    Implemented a complete and robust{' '}
                    <a
                      href="https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services/multi-factor-authentication-access-cra-login-services.html#toc2"
                      target="_blank"
                      className="underline"
                    >
                      Passcode Grid
                    </a>{' '}
                    based two-factor authentication including a user enrollment
                    portal.
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Implemented time zone settings for the admin panel so that
                    all tokens' expiry time, users' login times, subscription's
                    renewal date, etc., displayed in the frontend align with the
                    local time zone of the administrators, without impacting the
                    underlining entities and bussiness logic.
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Optimized two API calls when the amount of users in one
                    organization is huge by just tweaking database queries
                    &mdash; the request time drops from over 10s to just above
                    200ms.
                  </li>
                </ul>
                <h5 className="text-md font-bold py-2">
                  <a
                    href="https://www.logintc.com/blog/introducing-our-new-on-premise-solution-logintc-managed"
                    target="_blank"
                    className="underline"
                  >
                    LoginTC Managed: Fully On-Premises Two-Factor Authentication
                  </a>
                </h5>
                <ul className="divide-y-2 divide-accent">
                  <li className="p-3 hover:bg-primary ">
                    Implemented an offline{' '}
                    <a
                      href="https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services/multi-factor-authentication-access-cra-login-services.html#toc2"
                      target="_blank"
                      className="underline"
                    >
                      Passcode Grid
                    </a>{' '}
                    based two-factor authentication for{' '}
                    <a
                      href="https://www.logintc.com/docs/connectors/windows-rdp-logon/"
                      target="_blank"
                      className="underline"
                    >
                      Windows Logon Connector
                    </a>
                    .
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Implemented an offline{' '}
                    <a
                      href="https://www.logintc.com/docs/guides/software-otp-tokens/"
                      target="_blank"
                      className="underline"
                    >
                      Software Token
                    </a>{' '}
                    based two-factor authentication for{' '}
                    <a
                      href="https://www.logintc.com/docs/connectors/windows-rdp-logon/"
                      target="_blank"
                      className="underline"
                    >
                      Windows Logon Connector
                    </a>
                    , which supports online and offline authentication
                    sychronization.
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Implemented an offline{' '}
                    <a
                      href="https://www.logintc.com/docs/guides/bypass-codes/"
                      target="_blank"
                      className="underline"
                    >
                      Bypass Codes
                    </a>{' '}
                    based two-factor authentication for{' '}
                    <a
                      href="https://www.logintc.com/docs/connectors/windows-rdp-logon/"
                      target="_blank"
                      className="underline"
                    >
                      Windows Logon Connector
                    </a>
                    .
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Optimized two generic database queries (on{' '}
                    <em>many-to-many</em> and
                    <em>one-to-many</em> entity realationships) by replacing the
                    sub-select queries with <em>inner join</em> clauses &mdash;
                    the speed of the requests invoking these queries soar by
                    10x.
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Card>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
        <Card id="waterloo">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <img
              className="h-auto w-1/2 md:w-2/5 lg:w-1/3 "
              src={uwaterlooUrl}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-0.5 items-center">
              <h5 className="text-sm font-semibold italic ">
                Sept. 2020 - Aug. 2021: Waterloo, ON
              </h5>
            </div>
            <h5 className="text-lg lg:text-xl text-center font-bold ">
              M.Eng. in Electrical and Computer Engineering
            </h5>
          </div>
          <div className="mx-auto w-full rounded-2xl max-w-md lg:max-w-2xl space-y-2 ">
            <Accordion title="Courses">
              <div className="w-full pt-3 rounded-lg shadow-lg ">
                <ul className="divide-y-2 divide-accent">
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://student.cs.uwaterloo.ca/~cs246"
                      target="_blank"
                    >
                      CS 246 : Object-Oriented Software Development
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://cs.uwaterloo.ca/~a23gao/cs486686_s19"
                      target="_blank"
                    >
                      CS 686 : Introduction to Artificial Intelligence
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="http://www.gautamkamath.com/courses/CS480-wi2021.html"
                      target="_blank"
                    >
                      CS 680 : Introduction to Machine Learning
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://crysp.uwaterloo.ca/courses/cs458/S22-material/S22-syllabus.html"
                      target="_blank"
                    >
                      CS 658 : Computer Security and Privacy (Dropped)
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a href="https://patricklam.ca/sase-2022/" target="_blank">
                      ECE 750 : Special Topics in Computer Software: Static
                      Analysis
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://uwaterloo.ca/electrical-computer-engineering/sites/ca.electrical-computer-engineering/files/uploads/files/ece_606_syllabus-logistics-schedule_3.pdf"
                      target="_blank"
                    >
                      ECE 606 : Algorithm Design and Analysis
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://www.youtube.com/watch?v=DjMLPUllnms"
                      target="_blank"
                    >
                      MSCI 720 : Search Engine
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    <a
                      href="https://ece.uwaterloo.ca/~agurfink/ece650/"
                      target="_blank"
                    >
                      ECE 650 : Methods and Tools for Software Engineering
                    </a>
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    ECE 651 : Foundations of Software Engineering
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    ECE 655 : Protocols, Software and Issues in Mobile Systems
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Card>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
        <Card id="alberta">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <Ualberta className="h-auto w-1/2 md:w-1/3 lg:w-1/4 " />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-0.5 items-center">
              <h5 className="text-sm font-semibold italic ">
                July 2019 - Sept. 2019: Edmonton, AB
              </h5>
            </div>
            <h5 className="text-lg lg:text-xl text-center font-bold ">
              Student Research Intern
            </h5>
          </div>
          <div className="mx-auto w-full rounded-2xl max-w-md lg:max-w-2xl space-y-2 ">
            <Accordion title="Experiences">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row space-x-4 justify-center items-center">
                  <img
                    className="h-auto w-1/4 md:w-1/6 lg:w-1/12 "
                    src={ualbertaEngUrl}
                  />
                  <div className="flex flex-col space-y-0.5 ">
                    <h5 className="text-lg lg:text-xl text-left font-bold ">
                      <a
                        href="https://vision-and-learning-lab-ualberta.github.io/"
                        target="_blank"
                        className="underline"
                      >
                        Vision and Learning Lab @UAlberta
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="w-full pt-3 rounded-lg shadow-lg ">
                  <ul className="divide-y-2 divide-accent">
                    <li className="p-3 hover:bg-primary ">
                      Led a research project on human action detection based on
                      single plenoptic camera
                    </li>
                    <li className="p-3 hover:bg-primary ">
                      Wrote a complete documentation of hardware and software
                      setup of the plenoptic camera — Raytrix R5 Workflow
                    </li>
                    <li className="p-3 hover:bg-primary ">
                      Set up a data acquisition system with the light-field
                      engine and the camera’s SDK
                    </li>
                    <li className="p-3 hover:bg-primary ">
                      Reproduced state of the art results on NYU hand pose
                      dataset using PyTorch
                    </li>
                  </ul>
                </div>
              </div>
            </Accordion>
          </div>
        </Card>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
        <Card id="uestc">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <img
              className="h-auto w-2/5 md:w-1/3 lg:w-1/4 "
              src={
                currentThemeMode === ThemeMode.Dark ? uestcWhiteUrl : uestcUrl
              }
            />
            <PlusSign className="h-auto w-4 md:w-8 dark:fill-gray-200" />
            <img
              className="h-auto w-1/3 md:w-1/4 lg:w-1/5  "
              src={
                currentThemeMode === ThemeMode.Dark
                  ? uglasgowWhiteUrl
                  : uglasgowUrl
              }
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-0.5 items-center">
              <h5 className="text-sm font-semibold italic ">
                Sept. 2016 - June 2020: Chengdu, China
              </h5>
              <h5 className="text-sm font-semibold">Joint Program</h5>
            </div>
            <h5 className="text-lg lg:text-xl text-center font-bold ">
              B.Eng. in Electronic Information Engineering
            </h5>
          </div>
          <div className="mx-auto w-full rounded-2xl max-w-md lg:max-w-2xl space-y-2 ">
            <Accordion title="Experiences">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row space-x-4 justify-center items-center">
                  <img
                    className="h-auto w-2/5 md:w-1/3 lg:w-1/4 "
                    src={uestcSeseUrl}
                  />
                  <div className="flex flex-col space-y-0.5 ">
                    <h5 className="text-lg lg:text-xl text-left font-bold ">
                      <a
                        href="http://www.liushuaicheng.org/"
                        target="_blank"
                        className="underline"
                      >
                        Institute of Image Processing @UESTC
                      </a>
                    </h5>
                    <h5 className="text-sm text-left font-bold ">
                      Undergraduate Research Assistant
                    </h5>
                    <h5 className="text-sm font-semibold italic ">
                      Oct. 2018 – June 2020
                    </h5>
                  </div>
                </div>
                <div className="w-full pt-3 rounded-lg shadow-lg ">
                  <ul className="divide-y-2 divide-accent">
                    <li className="p-3 hover:bg-primary ">
                      Implemented an encoder-decoder-based algorithm for video
                      deburring
                    </li>
                    <li className="p-3 hover:bg-primary ">
                      Made a real-time, multiple static hand gesture controlled
                      music player
                    </li>
                    <li className="p-3 hover:bg-primary ">
                      Led a team project of 8 students on a smart robot built
                      with Raspberry Pi
                    </li>
                  </ul>
                </div>
              </div>
            </Accordion>
            <Accordion title="Courses">
              <div className="w-full pt-3 rounded-lg shadow-lg ">
                <ul className="divide-y-2 divide-accent">
                  <li className="p-3 hover:bg-primary ">
                    Real Time Computing Systems and Architecture
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Microeletronic Systems
                  </li>
                  <li className="p-3 hover:bg-primary ">Embeded Processors</li>
                  <li className="p-3 hover:bg-primary ">
                    Application and Designt of Digital Logic
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Computer Algorithm and Program
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Introductory Programming
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Introduction to Nerual Networks
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Pattern Recognition and Image Processing
                  </li>
                  <li className="p-3 hover:bg-primary ">Signals and Systems</li>
                  <li className="p-3 hover:bg-primary ">
                    Digital Signal Processing
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Digital Communication
                  </li>
                  <li className="p-3 hover:bg-primary ">Control</li>
                  <li className="p-3 hover:bg-primary ">
                    Circuit Design and Analysis
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Electronic System Design
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Eletromagnetic Field and Microwave Technology
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Engineering Project Management and Finance
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Engineering and the Law
                  </li>
                  <li className="p-3 hover:bg-primary ">
                    Engineering Career Skills
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </Card>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration={0.5}>
        <Card id="yysyz">
          <div className="flex flex-row space-x-4 justify-center items-center">
            <img className="h-auto w-1/2 md:w-1/3 lg:w-1/4  " src={yysyzUrl} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-0.5 items-center">
              <h5 className="text-sm font-semibold italic ">
                Sept. 2013 - June 2016: Yueyang, China
              </h5>
            </div>
            <h5 className="text-lg lg:text-xl text-center font-bold ">
              High School
            </h5>
          </div>
        </Card>
      </AnimationOnScroll>
    </div>
  );
};
