import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    try {
      localStorage.removeItem("chsetube_token");
      localStorage.removeItem("chsetube_user");
    } catch (e) {}
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090a0c] text-zinc-100 flex items-center justify-center p-4 font-sans selection:bg-white selection:text-black">
          <div className="max-w-md w-full bg-[#0e0f12] border border-white/[0.08] rounded-xl p-6 sm:p-8 text-center space-y-4 shadow-2xl">
            <img
              src="/logo.png"
              alt="CHSETube Logo"
              className="w-14 h-14 object-contain mx-auto drop-shadow-md select-none"
              width={56}
              height={56}
            />

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Temporary Loading Issue
              </h2>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                We encountered an unexpected interface state. Your study notes and completed chapters are safe in local storage.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black text-xs font-semibold shadow-sm transition-all"
              >
                Reload Application
              </button>
              <button
                onClick={this.handleReset}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-black/60 hover:bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-medium transition-colors"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
