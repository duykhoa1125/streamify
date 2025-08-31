import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import TestErrorComponent from "../components/TestErrorComponent";

const TestErrorPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Error Boundary Test Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Without Error Boundary</h2>
            <p className="text-sm text-base-content/70 mb-4">
              This component will crash the entire page
            </p>
            {/* <TestErrorComponent /> */}
            <div className="alert alert-info">
              <span>Commented out to prevent page crash</span>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">With Error Boundary</h2>
            <p className="text-sm text-base-content/70 mb-4">
              This component is wrapped in an error boundary
            </p>
            <ErrorBoundary>
              <TestErrorComponent />
            </ErrorBoundary>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="alert alert-success">
          <span>
            If you can see this message, the error boundary is working
            correctly!
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestErrorPage;
