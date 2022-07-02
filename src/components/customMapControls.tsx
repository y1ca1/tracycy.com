import React from 'react';
import { createPortal } from 'react-dom';
import { useGoogleMap } from '@react-google-maps/api';
import { Button } from 'flowbite-react';
import AsiaIcon from '@/assets/icons/experience/asia.svg';
import NorthAmericaIcon from '@/assets/icons/experience/north-america.svg';

const YUEYANG: google.maps.LatLngLiteral = {
  lat: 29.386,
  lng: 113.094,
};

const WATERLOO: google.maps.LatLngLiteral = {
  lat: 43.473,
  lng: -80.541,
};

export const ButtonGroupControl = () => {
  const map = useGoogleMap();

  const ButtonGroupControlElement = React.useCallback(
    (): React.ReactElement => (
      <Button.Group outline={true}>
        <Button color="gray" onClick={() => map?.panTo(YUEYANG)}>
          <AsiaIcon className="mr-1 h-6 w-6 dark:fill-white" /> Asia
        </Button>
        <Button color="gray" onClick={() => map?.panTo(WATERLOO)}>
          <NorthAmericaIcon className="mr-1 h-6 w-6 dark:fill-white" /> North
          America
        </Button>
      </Button.Group>
    ),
    [map],
  );

  const [container] = React.useState(document.createElement('div'));

  React.useEffect(() => {
    map?.controls[google.maps.ControlPosition.TOP_CENTER].push(container);
  }, [container, map]);

  return createPortal(<ButtonGroupControlElement />, container);
};
