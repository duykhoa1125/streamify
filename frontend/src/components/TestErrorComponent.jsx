import React from "react";

const TestErrorComponent = () => {
  // This will intentionally throw an error to test the error boundary
  throw new Error(
    "This is a test error to verify error boundary functionality"
  );

  // eslint-disable-next-line no-unreachable
  return <div>This should never render</div>;
};

export default TestErrorComponent;
