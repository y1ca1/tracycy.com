import React from 'react';
import { Accordion, Card } from 'flowbite-react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import yysyzUrl from '@/assets/icons/experience/yysyz.png';
import uestcUrl from '@/assets/icons/experience/uestc.png';
import uestcWhiteUrl from '@/assets/icons/experience/uestc-white.png';
import uglasgowUrl from '@/assets/icons/experience/UoG_colour.png';
import uglasgowWhiteUrl from '@/assets/icons/experience/UoG_keyline.png';
import PlusSign from '@/assets/icons/plus-sign.svg';
import Ualberta from '@/assets/icons/experience/ualberta.svg';
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
