import React from 'react';
import { isMobile } from 'react-device-detect';
import { useGoogleMap, MarkerF } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/infobox';

export interface MarkerWithInfoBoxProps {
  infoBox: InfoBox;
  markerRef: React.MutableRefObject<google.maps.Marker | undefined>;
  icon: (size?: number) => google.maps.Icon;
  position: google.maps.LatLngLiteral;
  offset?: google.maps.Size;
  content: string;
  href?: string;
}

export const MarkerWithInfoBox = ({
  infoBox,
  markerRef,
  icon,
  position,
  offset = new google.maps.Size(0, 0),
  content,
  href,
}: MarkerWithInfoBoxProps) => {
  const map = useGoogleMap();

  return !isMobile ? (
    <MarkerF
      icon={icon()}
      animation={google.maps.Animation.DROP}
      position={position}
      onLoad={(marker: google.maps.Marker) => (markerRef.current = marker)}
      onUnmount={() => (markerRef.current = undefined)}
      onMouseOver={() => {
        markerRef.current?.setIcon(icon(56));
        infoBox.setOptions({ pixelOffset: offset });
        infoBox.setContent(content);
        if (map) infoBox.open(map, markerRef.current);
      }}
      onMouseOut={() => {
        markerRef.current?.setIcon(icon());
        infoBox.close();
      }}
      onClick={() =>
        // TODO: optimize this to use React.useRef()
        document.querySelector(`#${href}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    />
  ) : (
    <MarkerF
      icon={icon()}
      animation={google.maps.Animation.DROP}
      position={position}
      onLoad={(marker: google.maps.Marker) => (markerRef.current = marker)}
      onUnmount={() => (markerRef.current = undefined)}
      onClick={() => {
        // clean up
        infoBox.close();

        infoBox.setOptions({ pixelOffset: offset });
        infoBox.setContent(content);
        if (map) infoBox.open(map, markerRef.current);
      }}
      onDblClick={() =>
        // TODO: optimize this to use React.useRef()
        document.querySelector(`#${href}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }
    />
  );
};
