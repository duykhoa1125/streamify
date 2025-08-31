import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // You can send this to an error reporting service like Sentry
    // Example: Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
          <div className="card bg-base-100 shadow-xl max-w-md w-full">
            <div className="card-body text-center">
              <div className="text-6xl mb-4">😵</div>
              <h2 className="card-title justify-center text-error">
                Oops! Something went wrong
              </h2>
              <p className="text-base-content/70 mb-4">
                We encountered an unexpected error. Please try refreshing the
                page or contact support if the problem persists.
              </p>

              {import.meta.env.DEV && (
                <details className="text-left mb-4">
                  <summary className="cursor-pointer text-sm font-semibold mb-2">
                    Error Details (Development Only)
                  </summary>
                  <div className="bg-base-200 p-3 rounded text-xs font-mono overflow-auto max-h-32">
                    <div className="text-error font-semibold mb-1">
                      {this.state.error && this.state.error.toString()}
                    </div>
                    <div className="text-base-content/60">
                      {this.state.errorInfo.componentStack}
                    </div>
                  </div>
                </details>
              )}

              <div className="card-actions justify-center gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => window.location.reload()}
                >
                  Refresh Page
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    this.setState({
                      hasError: false,
                      error: null,
                      errorInfo: null,
                    })
                  }
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
