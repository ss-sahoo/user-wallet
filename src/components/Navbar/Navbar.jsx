import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white font-bold text-2xl hover:text-white"
            >
              My App
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/"
              className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium mx-2"
            >
              Home
            </Link>
            <Link
              to="/transaction"
              className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium mx-2"
            >
              Transaction
            </Link>
            <Link
              to="/data"
              className="text-white hover:bg-white hover:text-purple-500 px-3 py-2 rounded-md text-sm font-medium mx-2"
            >
              Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
