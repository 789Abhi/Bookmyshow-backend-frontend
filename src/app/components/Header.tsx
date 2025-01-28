import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          <img src="/bookmyshow.svg" alt="BookMyShow Logo" />
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search movies, users, bookings..."
            className="ml-2 bg-transparent outline-none w-full"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
