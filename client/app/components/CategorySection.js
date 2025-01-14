"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { subCategories } from "../data/data";
import { IoSearchOutline } from "react-icons/io5";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSubCategory, setExpandeSubCategory] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filteredCategories, setFilteredCategories] = useState(null);

  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCategories(data);
        setFilteredCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleCategoryClick = (catName, catId) => {
    setExpandedCategory(catId === expandedCategory ? null : catId);
    router.push(`${catName}/?cat=${catId}`);
  };

  const handleSubcategoryClick = (catId, subcatId) => {
    router.push(`/?cat=${catId}&subcat=${subcatId}`);
  };

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category.cat_name_en.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [categories, searchValue]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  console.log(filteredCategories);

  return (
    <section
      className="h-[85.5vh] lg:min-w-[350px] max-w-[350px] overflow-hidden bg-white
      xs:hidden sm:hidden md:hidden lg:block xs:h-screen sm:h-screen lg:h-[85vh] rounded-t-lg"
    >
      <div>
        <h2 className="font-medium text-lg text-center bg-customGreen text-white p-[14px]">
          Categories
        </h2>
        <form className="relative w-full max-w-[370px] p-3">
          <input
            type="text"
            placeholder="Search Categories"
            value={searchValue}
            onChange={handleSearch}
            className="w-full px-4 py-[11px] pl-11 border border-gray-200 rounded-md shadow-sm  outline-none focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-12 rounded-md flex items-center justify-center">
            <IoSearchOutline className="text-gray-600 text-xl" />
          </div>
        </form>
      </div>
      <div className=" overflow-y-auto h-full px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-16">
        <ul>
          {filteredCategories?.map((category) => (
            <li key={category.cat_id} className="mb-4">
              <button
                onClick={() =>
                  handleCategoryClick(category.cat_name_en, category.cat_id)
                }
                className={`flex items-center space-x-4 px-4 py-3 hover:bg-customLiteBlue rounded-lg w-full ${
                  expandedCategory === category.cat_id
                    ? "bg-customLiteBlue"
                    : ""
                }`}
              >
                <div className="bg-gray-50 rounded-sm h-[50px] w-[50px] flex justify-center items-center">
                  <img
                    src={`/cat_icon/${category.cat_icon}.svg`}
                    alt={`logo`}
                    className="w-8 h-8"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">
                    {category.cat_name_en}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Subcategory: {category.no_of_subcat}
                  </p>
                </div>
              </button>
       {/*sub category............ */}
              {expandedCategory === category.cat_id && (
                <ul className="flex flex-col space-y-2 ml-8 border-l-2 border-dotted my-2 border-customGreen">
                  {subCategories.map((subCat, i) => (
                    <div
                      key={i}
                      className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3 cursor-pointer"
                    >
                      <div className="flex flex-row my-2">
                        <div className="bg-customGreen -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>
                        <div>
                          <span
                            onClick={() => setExpandeSubCategory(i)}
                            className={`font-semibold text-sm ${
                              expandedSubCategory === i
                                ? "text-customGreen"
                                : "text-gray-800"
                            }`}
                          >
                            {subCat}
                          </span>
                    {/* sub duas...............*/}
                          {expandedSubCategory === i && (
                            <div className="flex flex-col space-y-4 mt-4 text-sm">
                              <div className="flex flex-row">
                                <img
                                  src="/duaarrow.svg"
                                  className="-translate-y-1 mr-2"
                                />
                                <span>Allah's guidance #1</span>
                              </div>
                              <div className="flex flex-row">
                                <img
                                  src="/duaarrow.svg"
                                  className="-translate-y-1 mr-2"
                                />
                                <span>Allah's guidance #1</span>
                              </div>
                              <div className="flex flex-row">
                                <img
                                  src="/duaarrow.svg"
                                  className="-translate-y-1 mr-2"
                                />
                                <span>Allah's guidance #1</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
