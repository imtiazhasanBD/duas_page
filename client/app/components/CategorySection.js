"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCategories(data);
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
  console.log(categories);

  return (
    <section className="mx-2 h-[85.5vh] lg:min-w-[350px] overflow-hidden bg-white
      xs:hidden sm:hidden md:hidden lg:block xs:h-screen sm:h-screen lg:h-[85vh] ">
      <h2 className="font-bold text-lg">Categories</h2>
      <div
        className=" overflow-y-auto h-full p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        <ul>
          {categories.map((category) => (
            <li key={category.cat_id} className="mb-4">
              <button
                onClick={() =>
                  handleCategoryClick(category.cat_name_en, category.cat_id)
                }
                className="font-bold text-left w-full"
              >
                {category.cat_name_en}
              </button>
              {expandedCategory === category.cat_id && (
                <ul className="ml-4 mt-2">
                   <li>subcategories</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
