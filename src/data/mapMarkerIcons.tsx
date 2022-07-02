import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SchoolIcon from '@/assets/icons/experience/school.svg';
import UniversityIcon from '@/assets/icons/experience/university.svg';
import PhoneIcon from '@/assets/icons/experience/iphone.svg';
import ChildrenIcon from '@/assets/icons/experience/children.svg';
import AmusementParkIcon from '@/assets/icons/experience/amusement-park.svg';
import NationalParkIcon from '@/assets/icons/experience/national-park.svg';
import CanoeIcon from '@/assets/icons/experience/canoe.svg';
import cyphercorIconUrl from '@/assets/icons/experience/cyphercor-logo.png';

const schoolIconString = encodeURIComponent(
  renderToStaticMarkup(<SchoolIcon />),
);

const universityIconString = encodeURIComponent(
  renderToStaticMarkup(<UniversityIcon />),
);

const phoneIconString = encodeURIComponent(renderToStaticMarkup(<PhoneIcon />));

const childrenIconString = encodeURIComponent(
  renderToStaticMarkup(<ChildrenIcon />),
);

const amusementParkIconString = encodeURIComponent(
  renderToStaticMarkup(<AmusementParkIcon />),
);

const nationalParkIconString = encodeURIComponent(
  renderToStaticMarkup(<NationalParkIcon />),
);

const canoeIconString = encodeURIComponent(renderToStaticMarkup(<CanoeIcon />));

export const schoolIcon = (size = 48): google.maps.Icon => ({
  url: `data:image/svg+xml,${schoolIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const universityIcon = (size = 64): google.maps.Icon => ({
  url: `data:image/svg+xml,${universityIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const phoneIcon = (size = 32): google.maps.Icon => ({
  url: `data:image/svg+xml,${phoneIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const childrenIcon = (size = 48): google.maps.Icon => ({
  url: `data:image/svg+xml,${childrenIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const amusementParkIcon = (size = 48): google.maps.Icon => ({
  url: `data:image/svg+xml,${amusementParkIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const nationalParkIcon = (size = 56): google.maps.Icon => ({
  url: `data:image/svg+xml,${nationalParkIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const canoeIcon = (size = 40): google.maps.Icon => ({
  url: `data:image/svg+xml,${canoeIconString}`,
  scaledSize: new google.maps.Size(size, size),
});
export const cyphercorIcon = (size = 32): google.maps.Icon => ({
  url: cyphercorIconUrl,
  scaledSize: new google.maps.Size(size, size),
});
