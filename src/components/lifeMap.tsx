import React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/infobox';
import { RotatingSquare } from 'react-loader-spinner';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import { ButtonGroupControl } from '@/components/customMapControls';
import * as Positions from '@/data/latlngs';
import * as MarkerIcons from '@/data/mapMarkerIcons';
import * as InfoWindowContents from '@/data/infoBoxContents';
import { DarkStyle, LightStyle } from '@/googleMapStyles';
import { MarkerWithInfoBox } from '@/components/markerWithInfoBox';

export const LifeMap = (): JSX.Element => {
  const currentThemeMode = useThemeMode()[0];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GMapAPIKey as string,
    // ...otherOptions
  });

  let infoBox: InfoBox;

  if (isLoaded) {
    infoBox = new InfoBox({
      closeBoxURL: '',
      enableEventPropagation: true,
      disableAutoPan: true,
    });
  }

  const chaoyangMarker = React.useRef<google.maps.Marker>();
  const erzhongMarker = React.useRef<google.maps.Marker>();
  const yizhongMarker = React.useRef<google.maps.Marker>();
  const beijingMarker = React.useRef<google.maps.Marker>();
  const uestcMarker = React.useRef<google.maps.Marker>();
  const thaiMarker = React.useRef<google.maps.Marker>();
  const lankaMarker = React.useRef<google.maps.Marker>();
  const albertaMarker = React.useRef<google.maps.Marker>();
  const banffMarker = React.useRef<google.maps.Marker>();
  const waterlooMarker = React.useRef<google.maps.Marker>();
  const algonquinMarker = React.useRef<google.maps.Marker>();
  const cyphercorMarker = React.useRef<google.maps.Marker>();
  const cmuMarker = React.useRef<google.maps.Marker>();
  const umdCSMarker = React.useRef<google.maps.Marker>();

  const MapComponent = React.memo(() => (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '618px',
        borderRadius: '0.5rem',
      }}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        styles: currentThemeMode === ThemeMode.Dark ? DarkStyle : LightStyle,
      }}
      center={Positions.UMD}
      zoom={5}
    >
      <ButtonGroupControl />
      {/* <MarkerWithInfoBox */}
      {/*   infoBox={infoBox} */}
      {/*   markerRef={chaoyangMarker} */}
      {/*   icon={MarkerIcons.schoolIcon} */}
      {/*   position={Positions.CHAOYANG} */}
      {/*   content={InfoWindowContents.chaoyangContent} */}
      {/* /> */}
      {/* <MarkerWithInfoBox */}
      {/*   infoBox={infoBox} */}
      {/*   markerRef={erzhongMarker} */}
      {/*   icon={MarkerIcons.schoolIcon} */}
      {/*   position={Positions.ERZHONG} */}
      {/*   content={InfoWindowContents.erzhongContent} */}
      {/* /> */}
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={yizhongMarker}
        icon={MarkerIcons.schoolIcon}
        position={Positions.YIZHONG}
        content={InfoWindowContents.yizhongContent}
        href="yysyz"
      />
      {/* <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={beijingMarker}
        icon={MarkerIcons.amusementParkIcon}
        position={Positions.BEIJING}
        content={InfoWindowContents.beijingContent}
      /> */}
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={uestcMarker}
        icon={MarkerIcons.universityIcon}
        position={Positions.UESTC}
        content={InfoWindowContents.uestcContent}
        href="uestc"
      />
      {/* <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={thaiMarker}
        icon={MarkerIcons.phoneIcon}
        position={Positions.THAI}
        content={InfoWindowContents.thaiContent}
      /> */}
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={lankaMarker}
        icon={MarkerIcons.childrenIcon}
        position={Positions.LANKA}
        offset={new google.maps.Size(0, -300)}
        content={InfoWindowContents.lankaContent}
      />
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={albertaMarker}
        icon={MarkerIcons.researchIcon}
        position={Positions.ALBERTA}
        content={InfoWindowContents.ualbertaContent}
        href="alberta"
      />
      {/* <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={banffMarker}
        icon={MarkerIcons.nationalParkIcon}
        position={Positions.BANFF}
        content={InfoWindowContents.banffContent}
      /> */}
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={waterlooMarker}
        icon={MarkerIcons.universityIcon}
        position={Positions.WATERLOO}
        content={InfoWindowContents.uwaterlooContent}
        href="waterloo"
      />
      {/* <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={algonquinMarker}
        icon={MarkerIcons.canoeIcon}
        position={Positions.ALGONQUIN}
        content={InfoWindowContents.algonquinContent}
      /> */}
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={cyphercorMarker}
        icon={MarkerIcons.workIcon}
        position={Positions.CYPHERCOR}
        content={InfoWindowContents.cyphercorContent}
        href="cyphercor"
      />
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={cmuMarker}
        icon={MarkerIcons.universityIcon}
        position={Positions.CMU}
        offset={new google.maps.Size(30, -30)}
        content={InfoWindowContents.cmuContent}
        href="cmu"
      />
      <MarkerWithInfoBox
        infoBox={infoBox}
        markerRef={umdCSMarker}
        icon={MarkerIcons.universityIcon}
        position={Positions.UMD}
        offset={new google.maps.Size(30, -30)}
        content={InfoWindowContents.umdContent}
        href="umd"
      />
    </GoogleMap>
  ));

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return (
    <>
      {!isLoaded ? (
        <RotatingSquare
          height="100"
          width="100"
          color="grey"
          ariaLabel="loading"
        />
      ) : (
        <MapComponent />
      )}
    </>
  );
};
