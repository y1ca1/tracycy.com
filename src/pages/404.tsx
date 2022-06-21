import React from 'react';
import { SpikeAnimate } from '@/components/spike';
import Four0FourBubble from '@/assets/404-bubble.svg';

export const NotFound = (): JSX.Element => (
  <>
    <div className="flex flex-row gap-0 items-center justify-center ">
      <Four0FourBubble className="w-3/4 h-3/4 md:w-1/2 md:h-1/2 lg:w-1/3 lg:h-1/3 pb-40 fill-accent" />
      <SpikeAnimate flipped={true} />
    </div>
  </>
);
