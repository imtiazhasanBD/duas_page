import CategorySection from "./components/CategorySection";
import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex min-h-screen p-6">
          {/* Sidebar */}
          <SideNavBar />
          {/* Main Content Area */}
          <div className="flex pt-[70px] ml-[122px] gap-4 h-screen fixed">
            {/* Header */}
            <header className="fixed top-0 left-40 right-0  py-6 pr-10 z-10">
              <Header />
            </header>
            <section>
              {/* Categories */}
              <div
                className="mx-2 h-[85.5vh] lg:min-w-[350px] overflow-hidden bg-white
      xs:hidden sm:hidden md:hidden lg:block xs:h-screen sm:h-screen lg:h-[85vh] space-y-10 overflow-y-auto"
              >
                <CategorySection />
              </div>

              {/* Main Content */}
            </section>
            {children}
            {/* Settings */}
            <aside className="hidden 2xl:block 3xl:block 3xl:col-start-4 bg-white">
              <div className="overflow-hidden w-full 2xl:w-[270px] 3xl:w-[300px]">
                <h2 className="font-bold text-lg">Settings</h2>
                <p>General Settings</p>
                <p>Font Settings</p>
                <p>Appearance Settings</p>
              </div>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
