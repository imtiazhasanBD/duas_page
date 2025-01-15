import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ toggleSetting,toggleCategory }) => {

  return (
    <section className="flex items-center justify-between z-20 gap-28 2xl:gap-52 w-full">
      {/* Left Side - Title */}
      <div className="flex items-center justify-between w-full ">
        <div className="flex gap-4 items-center">
        <AiOutlineMenu onClick={toggleCategory} className="w-6 h-6 lg:hidden" />
          <div className="m-auto lg:hidden">
            <img
              src="/nav_icon/dua-logo.svg"
              alt="dua-logo"
              className="w-[30px] h-[30px] m-auto"
            />
          </div>
          <h1 className="text-base sm:text-xl lg:text-2xl font-semibold">Dues Page</h1>
        </div>
        {/* Middle - Search Bar */}
        <form className="relative w-full max-w-[370px] hidden lg:block">
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
          className="w-12 h-12 rounded-full object-cover hidden lg:block"
        />
        <button onClick={toggleSetting} className="w-10 h-10 2xl:hidden">
          <img
            src="/settings.svg"
            alt="Settings"
            className="w-6 h-6 rounded-full object-cover"
          />
        </button>
      </nav>
    </section>
  );
};

export default Header;
