import React from 'react';

const CV = (): JSX.Element => (
  <React.Suspense
    fallback={
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
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
