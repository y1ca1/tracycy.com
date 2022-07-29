import React, { Suspense } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import { useImage } from 'react-image';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  location: string | string[];
}

export const Image = ({ location, ...props }: ImageProps) => {
  const { src } = useImage({
    srcList: location,
  });
  return (
    <Suspense
      fallback={
        <RotatingSquare
          height="100"
          width="100"
          color="grey"
          ariaLabel="loading"
        />
      }
    >
      <img src={src} {...props} />
    </Suspense>
  );
};
