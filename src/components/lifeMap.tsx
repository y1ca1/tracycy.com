import React from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { InfoBox } from '@react-google-maps/infobox';
import { RotatingSquare } from 'react-loader-spinner';
import { useThemeMode } from '@/hooks/useThemeMode';
import { ThemeMode } from '@/types/theme';
import { ButtonGroupControl } from '@/components/customMapControls';
import * as Positions from '@/data/latlngs';
import * as MarkerIcons from '@/data/mapMarkerIcons';
import * as InfoWindowContents from '@/data/infoWindowContents';
import { DarkStyle, LightStyle } from '@/googleMapStyles';

export const LifeMap = (): JSX.Element => {
  const currentThemeMode = useThemeMode()[0];

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBStHUG01KvuGC0DSk4tND9Mjiacb5eGR4', // ,
    // ...otherOptions
  });

  const map = React.useRef<google.maps.Map>();

  let infoBox: InfoBox;

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

  const MapComponent = React.memo(() => (
    <GoogleMap
      mapContainerStyle={{
        width: '100%',
        height: '618px',
      }}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
        styles: currentThemeMode === ThemeMode.Dark ? DarkStyle : LightStyle,
      }}
      center={Positions.YUEYANG}
      zoom={4}
      onLoad={(m: google.maps.Map) => {
        map.current = m;
        infoBox = new InfoBox({
          closeBoxURL: '',
          enableEventPropagation: true,
          disableAutoPan: true,
        });
      }}
    >
      <ButtonGroupControl />
      <MarkerF
        icon={MarkerIcons.schoolIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.CHAOYANG}
        onLoad={(marker: google.maps.Marker) =>
          (chaoyangMarker.current = marker)
        }
        onUnmount={() => (chaoyangMarker.current = undefined)}
        onMouseOver={() => {
          chaoyangMarker.current?.setIcon(MarkerIcons.schoolIcon(56));
          infoBox.setContent(InfoWindowContents.chaoyangContent);
          if (map.current) infoBox.open(map.current, chaoyangMarker.current);
        }}
        onMouseOut={() => {
          chaoyangMarker.current?.setIcon(MarkerIcons.schoolIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.schoolIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.ERZHONG}
        onLoad={(marker: google.maps.Marker) =>
          (erzhongMarker.current = marker)
        }
        onUnmount={() => (erzhongMarker.current = undefined)}
        onMouseOver={() => {
          erzhongMarker.current?.setIcon(MarkerIcons.schoolIcon(56));
          infoBox.setContent(InfoWindowContents.erzhongContent);
          if (map.current) infoBox.open(map.current, erzhongMarker.current);
        }}
        onMouseOut={() => {
          erzhongMarker.current?.setIcon(MarkerIcons.schoolIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.schoolIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.YIZHONG}
        onLoad={(marker: google.maps.Marker) =>
          (yizhongMarker.current = marker)
        }
        onUnmount={() => (yizhongMarker.current = undefined)}
        onMouseOver={() => {
          yizhongMarker.current?.setIcon(MarkerIcons.schoolIcon(56));
          infoBox.setContent(InfoWindowContents.yizhongContent);
          if (map.current) infoBox.open(map.current, yizhongMarker.current);
        }}
        onMouseOut={() => {
          yizhongMarker.current?.setIcon(MarkerIcons.schoolIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.amusementParkIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.BEIJING}
        onLoad={(marker: google.maps.Marker) =>
          (beijingMarker.current = marker)
        }
        onUnmount={() => (beijingMarker.current = undefined)}
        onMouseOver={() => {
          beijingMarker.current?.setIcon(MarkerIcons.amusementParkIcon(56));
          infoBox.setContent(InfoWindowContents.beijingContent);
          if (map.current) infoBox.open(map.current, beijingMarker.current);
        }}
        onMouseOut={() => {
          beijingMarker.current?.setIcon(MarkerIcons.amusementParkIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.universityIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.UESTC}
        onLoad={(marker: google.maps.Marker) => (uestcMarker.current = marker)}
        onUnmount={() => (uestcMarker.current = undefined)}
        onMouseOver={() => {
          uestcMarker.current?.setIcon(MarkerIcons.universityIcon(72));
          infoBox.setContent(InfoWindowContents.uestcContent);
          if (map.current) infoBox.open(map.current, uestcMarker.current);
        }}
        onMouseOut={() => {
          uestcMarker.current?.setIcon(MarkerIcons.universityIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.phoneIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.THAI}
        onLoad={(marker: google.maps.Marker) => (thaiMarker.current = marker)}
        onUnmount={() => (thaiMarker.current = undefined)}
        onMouseOver={() => {
          thaiMarker.current?.setIcon(MarkerIcons.phoneIcon(40));
          infoBox.setContent(InfoWindowContents.thaiContent);
          if (map.current) infoBox.open(map.current, thaiMarker.current);
        }}
        onMouseOut={() => {
          thaiMarker.current?.setIcon(MarkerIcons.phoneIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.childrenIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.LANKA}
        onLoad={(marker: google.maps.Marker) => (lankaMarker.current = marker)}
        onUnmount={() => (lankaMarker.current = undefined)}
        onMouseOver={() => {
          lankaMarker.current?.setIcon(MarkerIcons.childrenIcon(56));
          infoBox.setContent(InfoWindowContents.lankaContent);
          if (map.current) {
            infoBox.open(map.current, lankaMarker.current);
            map.current.panTo(Positions.LANKA);
          }
        }}
        onMouseOut={() => {
          lankaMarker.current?.setIcon(MarkerIcons.childrenIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.universityIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.ALBERTA}
        onLoad={(marker: google.maps.Marker) =>
          (albertaMarker.current = marker)
        }
        onUnmount={() => (albertaMarker.current = undefined)}
        onMouseOver={() => {
          albertaMarker.current?.setIcon(MarkerIcons.universityIcon(72));
          infoBox.setContent(InfoWindowContents.ualbertaContent);
          if (map.current) infoBox.open(map.current, albertaMarker.current);
        }}
        onMouseOut={() => {
          albertaMarker.current?.setIcon(MarkerIcons.universityIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.nationalParkIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.BANFF}
        onLoad={(marker: google.maps.Marker) => (banffMarker.current = marker)}
        onUnmount={() => (banffMarker.current = undefined)}
        onMouseOver={() => {
          banffMarker.current?.setIcon(MarkerIcons.nationalParkIcon(64));
          infoBox.setContent(InfoWindowContents.banffContent);
          if (map.current) infoBox.open(map.current, banffMarker.current);
        }}
        onMouseOut={() => {
          banffMarker.current?.setIcon(MarkerIcons.nationalParkIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.universityIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.WATERLOO}
        onLoad={(marker: google.maps.Marker) =>
          (waterlooMarker.current = marker)
        }
        onUnmount={() => (waterlooMarker.current = undefined)}
        onMouseOver={() => {
          waterlooMarker.current?.setIcon(MarkerIcons.universityIcon(72));
          infoBox.setContent(InfoWindowContents.uwaterlooContent);
          if (map.current) infoBox.open(map.current, waterlooMarker.current);
        }}
        onMouseOut={() => {
          waterlooMarker.current?.setIcon(MarkerIcons.universityIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.canoeIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.ALGONQUIN}
        onLoad={(marker: google.maps.Marker) =>
          (algonquinMarker.current = marker)
        }
        onUnmount={() => (algonquinMarker.current = undefined)}
        onMouseOver={() => {
          algonquinMarker.current?.setIcon(MarkerIcons.canoeIcon(48));
          infoBox.setContent(InfoWindowContents.algonquinContent);
          if (map.current) infoBox.open(map.current, algonquinMarker.current);
        }}
        onMouseOut={() => {
          algonquinMarker.current?.setIcon(MarkerIcons.canoeIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.cyphercorIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.CYPHERCOR}
        onLoad={(marker: google.maps.Marker) =>
          (cyphercorMarker.current = marker)
        }
        onUnmount={() => (cyphercorMarker.current = undefined)}
        onMouseOver={() => {
          cyphercorMarker.current?.setIcon(MarkerIcons.cyphercorIcon(40));
          infoBox.setContent(InfoWindowContents.cyphercorContent);
          if (map.current) infoBox.open(map.current, cyphercorMarker.current);
        }}
        onMouseOut={() => {
          cyphercorMarker.current?.setIcon(MarkerIcons.cyphercorIcon());
          infoBox.close();
        }}
      />
      <MarkerF
        icon={MarkerIcons.universityIcon()}
        animation={google.maps.Animation.DROP}
        position={Positions.CMU}
        onLoad={(marker: google.maps.Marker) => (cmuMarker.current = marker)}
        onUnmount={() => (cmuMarker.current = undefined)}
        onMouseOver={() => {
          cmuMarker.current?.setIcon(MarkerIcons.universityIcon(72));
          infoBox.setContent(InfoWindowContents.cmuContent);
          if (map.current) infoBox.open(map.current, cmuMarker.current);
        }}
        onMouseOut={() => {
          cmuMarker.current?.setIcon(MarkerIcons.universityIcon());
          infoBox.close();
        }}
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
