import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <div className="flex min-h-screen p-6">
          {/* Sidebar */}
          <aside className="fixed top-6 left-6 h-screen w-28 bg-white shadow-md dark:bg-gray-800 overflow-y-auto  rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(93vh)] xl:h-[94vh] 2xl:h-[93vh] pb-16">
            <nav className="p-4">
              <ul className="space-y-4">
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 1
                </li>
                <li className="text-gray-800 dark:text-gray-200 font-medium">
                  Sidebar Item 2
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex pt-16  ml-32 gap-4 h-screen fixed">
            {/* Header */}
            <header className="fixed top-0 left-40 w-full right-0  p-4 z-10">
              <h1 className="text-xl font-bold text-gray-800">Doas Page</h1>
            </header>
            <section>
              {/* Categories */}
              <div
                className="mx-2 h-[85.5vh] lg:min-w-[350px] overflow-hidden bg-white
      xs:hidden sm:hidden md:hidden lg:block xs:h-screen sm:h-screen lg:h-[85vh] space-y-10 overflow-y-auto"
              >
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
                <p>Duas Importance</p>
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
