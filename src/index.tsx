import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './codeblock.css';
import 'animate.css/animate.min.css';
import 'scroll-behavior-polyfill';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
