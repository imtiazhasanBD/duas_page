import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section className="flex items-center justify-between gap-28">
      {/* Left Side - Title */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-2xl font-semibold">Dues Page</h1>
        {/* Middle - Search Bar */}
        <form className="relative w-full max-w-[370px]">
          <input
            type="text"
            placeholder="Search By Dua Name"
            className="w-full px-4 py-[11px] border border-gray-300 rounded-md border-none shadow-sm  outline-none focus:outline-none focus:ring-1 focus:ring-green-600"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 h-10 w-12 bg-customLiteBlue rounded-md flex items-center justify-center">
            <IoSearchOutline className="text-gray-600 text-lg" />
          </div>
        </form>
      </div>

      {/* Right Side - Profile & Settings */}
      <nav className="flex items-center space-x-4">
        <img
          src="/profile.svg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <img
          src="/settings.svg"
          alt="Settings"
          className="w-6 h-6 rounded-full object-cover"
        />
      </nav>
    </section>
  );
};

export default Header;
