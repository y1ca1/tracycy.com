import React from 'react';
import { Tooltip } from 'flowbite-react';
import WorldMap from '@/assets/icons/world-map.svg';

interface ScrollToMapProps {
  map: React.RefObject<HTMLDivElement>;
}

export const ScrollToMap = ({ map }: ScrollToMapProps) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () =>
      window.pageYOffset > 500 ? setVisible(true) : setVisible(false);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-3/4">
      {visible && (
        <Tooltip
          content="Back to Map"
          placement="left"
          style="auto"
          arrow={false}
        >
          <WorldMap
            className="md:pl-1 lg:pl-4 w-full md:w-1/2 lg:w-1/3 hover:animate-map-spin hover:cursor-pointer"
            onClick={() =>
              map.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }
          />
        </Tooltip>
      )}
    </div>
  );
};
