import React from 'react';
import { createRoot } from 'react-dom/client';
import { polyfill } from 'seamless-scroll-polyfill';
import App from './App';
import './index.css';
import 'animate.css/animate.min.css';

polyfill();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
