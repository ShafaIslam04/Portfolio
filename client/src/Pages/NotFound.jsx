import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold">404</h1>

      <p>Page Not Found</p>

      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;