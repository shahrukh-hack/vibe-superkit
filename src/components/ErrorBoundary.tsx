import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F6F9FC] text-[#0A2540] p-8 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-bold">Something encountered an issue.</h2>
          <p className="text-sm text-gray-600 font-mono bg-white p-4 rounded-xl border border-gray-200">
            {this.state.error?.message}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#635BFF] text-white rounded-xl text-xs font-bold"
          >
            Reload Visualizer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
