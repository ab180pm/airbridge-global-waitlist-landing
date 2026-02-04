import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-md px-8 text-center">
        <div className="mb-8">
          <div className="mb-6 text-8xl font-extrabold text-slate-300">404</div>
          <h1 className="mb-3 text-2xl font-semibold text-slate-800">
            Page Not Found
          </h1>
          <p className="text-slate-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-6 py-3 font-medium text-white transition-all hover:bg-slate-700 hover:shadow-lg"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
