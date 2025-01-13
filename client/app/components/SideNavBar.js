import React from "react";
import { nav_icon } from "../data/data";

const SideNavBar = () => {
  return (
    <aside className="fixed top-6 left-6 h-screen w-28 bg-white shadow-md dark:bg-gray-800 overflow-y-auto  rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] pb-16 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 py-8">
      <div className="m-auto">
        <img
          src="/nav_icon/dua-logo.svg"
          alt="dua-logo"
          className="w-[50px] h-[50px] m-auto"
        />
      </div>
      <nav className="p-4 m-auto py-14">
        <ul className="flex flex-wrap gap-2 justify-center items-center">
          {nav_icon.map((icon, index) => (
            <li key={index} className="p-2 flex justify-center items-center">
              <div className="bg-customLiteBlue rounded-full h-10 w-10 flex justify-center items-center">
                <img
                  src={`/nav_icon/${icon}.svg`}
                  alt={`${icon} logo`}
                  className="w-5 h-5"
                />
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="m-auto">
        <img
          src="/nav_icon/dua-logo.svg"
          alt="dua-logo"
          className="w-[50px] h-[50px] m-auto"
        />
      </div>
    </aside>
  );
};

export default SideNavBar;
