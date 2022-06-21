import React from 'react';
import spikeSrcPNG from '@/assets/spike/spike-trans.png';
import spikeSrcPNGFlipped from '@/assets/spike/spike-trans-flipped.png';
import spikeSrcGIF from '@/assets/spike/spike-animation.gif';
import spikeSrcGIFFlipped from '@/assets/spike/spike-animation-flipped.gif';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const useFocus = <T extends HTMLElement>(): [
  React.RefObject<T>,
  () => void,
] => {
  const htmlRef = React.useRef<T>(null);
  const setFocus = () => {
    htmlRef.current?.focus();
  };

  return [htmlRef, setFocus];
};

export const SpikeBounce = ({ filpped = false }): JSX.Element => {
  const [divRef, setDivFocus] = useFocus<HTMLDivElement>();

  return (
    <div
      className="w-20 h-20 animate-spike-bounce hover:cursor-pointer focus:animate-none"
      tabIndex={0}
      ref={divRef}
      onClick={e => {
        e.preventDefault();
        setDivFocus();
      }}
    >
      {filpped ? (
        <img
          src={spikeSrcPNGFlipped}
          className="w-20 h-20 object-cover "
          alt="spike"
        />
      ) : (
        <img
          src={spikeSrcPNG}
          className="w-20 h-20 object-cover "
          alt="spike"
        />
      )}
    </div>
  );
};

export const SpikeAnimate = ({ flipped = false, size = 60 }): JSX.Element => (
  <div className={classNames(`w-${size} h-${size}`, 'hover:cursor-pointer ')}>
    {flipped ? (
      <img
        src={spikeSrcGIFFlipped}
        className={classNames(
          `w-${size} h-${size}`,
          'hover:cursor-pointer object-cover ',
        )}
        alt="spikeAnimate"
      />
    ) : (
      <img
        src={spikeSrcGIF}
        className={classNames(
          `w-${size} h-${size}`,
          'hover:cursor-pointer object-cover ',
        )}
        alt="spikeAnimate"
      />
    )}
  </div>
);
