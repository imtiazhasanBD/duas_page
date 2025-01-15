"use client"
import React, { Suspense, useState } from "react";
import Header from "./Header";
import SideNavBar from "./SideNavBar";
import SkeletonCategory from "./SkeletonCategory";
import SettingsSection from "./SettingSection";
import CategorySection from "./CategorySection";
import { nav_icon } from "../data/data";

const CustomLayout = ({children}) => {
    const [isSettingVisible, setIsSettingVisible] = useState(false);
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);

    const toggleSetting = () => {
      setIsSettingVisible((prev) => !prev);
    };
    const toggleCategory = () => {
      setIsCategoryVisible((prev) => !prev);
    };
  console.log(isSettingVisible);
  
  return (
    <>
      {/*small screen Header */}
      <header className="fixed top-0 left-0 right-0 bg-white py-6 px-4 z-10 block xl:hidden mb-4">
        <Header  toggleSetting={toggleSetting} toggleCategory={toggleCategory}/>
      </header>
      <div className="flex min-h-screen lg:p-6 ">
        {/* Sidebar */}
        <SideNavBar />
        {/* Main Content Area */}
        <div className="flex pt-[100px] xl:pt-[70px] xl:ml-[122px] md:gap-4 h-screen fixed pr-2 w-full">
          {/* Header */}
          <header className="fixed top-0 left-40 right-0  py-6 pr-10 z-10 hidden xl:block">
            <Header  toggleSetting={toggleSetting}/>
          </header>
          <section>
            {/* Categories */}
            <div
              className="mx-2 h-[85.5vh] lg:min-w-[350px] overflow-hidden bg-white
      xs:hidden sm:hidden md:hidden lg:block xs:h-screen sm:h-screen  lg:h-[85vh] space-y-10 overflow-y-auto"
            >
              <Suspense fallback={<SkeletonCategory />}>
                <CategorySection toggleCategory={toggleCategory} isCategoryVisible={isCategoryVisible} />
              </Suspense>
            </div>

            {/* Main Content */}
          </section>
          {children}
          {/* Settings */}

          <SettingsSection toggleSetting={toggleSetting} isSettingVisible={isSettingVisible} />
        </div>
         <nav className="px-4 py-2 m-auto shadow-sm bg-white z-0 fixed left-0 right-0 bottom-0 lg:hidden">
                <ul className="flex  gap-2 justify-evenly items-center w-full">
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
      </div>
    </>
  );
};

export default CustomLayout;
