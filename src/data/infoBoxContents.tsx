import React from 'react';
import { renderToString } from 'react-dom/server';
import { Card } from 'flowbite-react';
import uestcLogoUrl from '@/assets/icons/experience/uestc-logo.png';
import chaoyangLogoUrl from '@/assets/icons/experience/cyxy.png';
import erzhongLogoUrl from '@/assets/icons/experience/yysez.png';
import yizhongLogoUrl from '@/assets/icons/experience/yysyz.png';
import gapperLogoUrl from '@/assets/icons/experience/gapper.png';
import albertaLogoUrl from '@/assets/icons/experience/ualberta-logo.png';
import banffLogoUrl from '@/assets/icons/experience/banff.png';
import algonquinLogoUrl from '@/assets/icons/experience/algonquin.png';
import waterlooLogoUrl from '@/assets/icons/experience/uwaterloo-logo.png';
import cyphercorLogoUrl from '@/assets/icons/experience/cyphercor-logo.png';
import cmuLogoUrl from '@/assets/icons/experience/cmu-logo.png';

export const chaoyangContent = renderToString(
  <div className="w-2/3">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img
          className="mb-3 h-16 w-48 rounded-xl dark:bg-slate-200 "
          src={chaoyangLogoUrl}
        />
      </div>
      <h5 className="text-xl font-bold  ">2004-2010: Yueyang, Hunan </h5>
      <p className="text-md font-semibold text-secondary">
        I miss every morning my grandpa 👴 riding 🚲 me and my cousin to
        Chaoyang Primary School.
      </p>
    </div>
  </div>,
);

export const erzhongContent = renderToString(
  <div className="w-6/7">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="mb-3 h-14 w-52 rounded-xl " src={erzhongLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">2010-2013: Yueyang, Hunan</h5>
      <p className="text-md font-semibold text-secondary">
        We are CLASSIC Class 507 at Yueyang No.2 Middle School!
      </p>
    </div>
  </div>,
);

export const yizhongContent = renderToString(
  <div className="w-2/3">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="mb-3 h-12 w-56 rounded-xl " src={yizhongLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">2013-2016: Yueyang, Hunan</h5>
      <p className="text-md font-semibold text-secondary">
        The First High School of Yueyang &mdash; my Alma Mater. That's where I
        met two of my best friends till now.
      </p>
    </div>
  </div>,
);

export const beijingContent = renderToString(
  <div className="w-1/2">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <h5 className="text-xl font-bold tracking-tight ">
        Happy summer 2007 and 2012: Beijing
      </h5>
      <p className="text-md font-semibold text-secondary">
        I spent two of my wonderful summers in Beijing with my cousins.
      </p>
    </div>
  </div>,
);

export const uestcContent = renderToString(
  <div className="w-1/2">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img
          className="h-28 w-28 rounded-full dark:bg-slate-200 "
          src={uestcLogoUrl}
        />
      </div>
      <h5 className="text-xl font-bold  ">2016-2020: Chengdu, Sichuan</h5>
      <p className="text-md font-semibold text-secondary">
        I spent 4 wonderfull years in Chengdu and earned my Bachelor's degree at
        the University of Electronic Science and Technology of China.
      </p>
    </div>
  </div>,
);

export const lankaContent = renderToString(
  <div className="w-1/2">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-24 w-40 rounded-xl " src={gapperLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">Winter 2017: Akurala, Sri Lanka</h5>
      <p className="text-md font-semibold text-secondary">
        I spent some meaningful time with those disadvantaged 🧒 and had some
        nice trips at the beautiful south coast 🏖 of Sri Lanka.
      </p>
    </div>
  </div>,
);

export const thaiContent = renderToString(
  <div className="w-2/3">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <h5 className="text-xl font-bold tracking-tight ">
        January 2017: Thailand
      </h5>
      <p className="text-md font-semibold text-secondary">
        I lost my first iPhone at the airport. Sad story...
      </p>
    </div>
  </div>,
);

export const ualbertaContent = renderToString(
  <div className="w-1/2">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-28 w-28 rounded-xl " src={albertaLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">Summer 2019: Edmonton, AB</h5>
      <p className="text-md font-semibold text-secondary">
        My first time as a student research intern. Met some incredible fellows
        and also realized that I'm not a machine learning (ML) guy 😅.
      </p>
    </div>
  </div>,
);

export const banffContent = renderToString(
  <div className="w-3/4">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-28 w-28 rounded-xl " src={banffLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">Summer 2019: Banff, AB</h5>
      <p className="text-md font-semibold text-secondary">
        The finest mountains ⛰ and lakes 🏞 I've ever seen. Gorgeous scenery!
      </p>
    </div>
  </div>,
);

export const uwaterlooContent = renderToString(
  <div className="w-1/3">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-28 w-28 rounded-xl " src={waterlooLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">2020-2021: Waterloo, ON</h5>
      <p className="text-md font-semibold text-secondary">
        I pivoted to software and started my Master's degree at the University
        of Waterloo, where I for the first time in my life realized what
        programming languages (PL) <em>really</em> are and how I actually care
        more about the code <em>itself</em> rather than the rapid iterations of
        software development.
      </p>
    </div>
  </div>,
);

export const algonquinContent = renderToString(
  <div className="w-2/5">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-28 w-28 rounded-xl " src={algonquinLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">Fall 2021: Huntsville, ON</h5>
      <p className="text-md font-semibold text-secondary">
        Just got my first job ever in my life, so time to celebrate! It turns
        out that I really enjoy hiking 🥾 and boating 🛶! The colorful views 🍁
        were also amazing.
      </p>
    </div>
  </div>,
);

export const cyphercorContent = renderToString(
  <div className="w-1/3">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="h-28 w-28 rounded-xl " src={cyphercorLogoUrl} />
      </div>
      <h5 className="text-xl font-bold  ">2021-2022: Ottawa, ON</h5>
      <p className="text-md font-semibold text-secondary">
        This is my first job ever in my life! I work remotely from Waterloo as a
        software engineer 👨‍💻 at Cyphercor Inc. We develop security services
        (primarily multi-factor authentication) for Canada Revenue Agency (CRA)
        and other enterprises.
      </p>
    </div>
  </div>,
);

export const cmuContent = renderToString(
  <div className="w-1/3">
    <div className="flex flex-col p-5 space-y-2 rounded-lg border border-gray-200 bg-primary shadow-md dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img
          className="h-28 w-28 rounded-full dark:bg-slate-200"
          src={cmuLogoUrl}
        />
      </div>
      <h5 className="text-xl font-bold  ">2021-2023: Pittsburgh, PA</h5>
      <p className="text-md font-semibold text-secondary">
        I became increasingly curious about the theoretical foundations
        underlying new programming language features. This desire to understand
        the intricacies and write code that is not only elegant but also
        reliable, secure, and efficient, drove me to delve deeper into this
        field. I studied PL and security substantially at Carnegie Mellon
        University by taking relevant courses and doing research.
      </p>
    </div>
  </div>,
);
