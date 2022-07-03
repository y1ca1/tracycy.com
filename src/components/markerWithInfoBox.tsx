import React from 'react';
import { useGoogleMap, MarkerF } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/infobox';

export interface MarkerWithInfoBoxProps {
  infoBox: InfoBox;
  markerRef: React.MutableRefObject<google.maps.Marker | undefined>;
  icon: (size?: number) => google.maps.Icon;
  position: google.maps.LatLngLiteral;
  offset?: google.maps.Size;
  content: string;
}

export const MarkerWithInfoBox = ({
  infoBox,
  markerRef,
  icon,
  position,
  offset = new google.maps.Size(0, 0),
  content,
}: MarkerWithInfoBoxProps) => {
  const map = useGoogleMap();
  return (
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
    />
  );
};
