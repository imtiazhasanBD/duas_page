import { Suspense } from "react";
import CategorySection from "./components/CategorySection";
import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";
import "./globals.css";
import SkeletonCategory from "./components/SkeletonCategory";
import SettingSection from "./components/SettingSection";
import CustomLayout from "./components/CustomLayout";

export const metadata = {
  title: 'Dua & Ruqyah | All Duas Collection',
  description: 'Explore a comprehensive collection of duas and ruqyah categorized for easy navigation. Discover, search, and access Arabic text, transliteration, translation, and audio for each dua in a modern and user-friendly platform.',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
            <CustomLayout children={children}/>
      </body>
    </html>
  );
}
