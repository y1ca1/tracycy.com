import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  location: string | string[];
}

export const Image = ({ location, ...props }: ImageProps) => {
  const src = Array.isArray(location) ? location[0] : location;
  return <img src={src} loading="lazy" {...props} />;
};
