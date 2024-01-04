import React from 'react';
import { RotatingSquare } from 'react-loader-spinner';

const CV = (): JSX.Element => (
  <React.Suspense
    fallback={
      <RotatingSquare
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
      />
    }
  >
    <div className="relative w-full h-128 rounded-2xl overflow-hidden mt-24 mb-12">
      <object data="/cv.pdf" type="application/pdf" className="w-full h-full">
        <p>
          Your browser does not support PDFs. Please download the PDF to view
          it:
          <a href="/cv.pdf">Download PDF</a>.
        </p>
      </object>
    </div>
  </React.Suspense>
);

export default CV;
