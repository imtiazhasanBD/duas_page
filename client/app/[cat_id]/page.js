"use client";
import { useEffect, useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { useSearchParams } from "next/navigation";
import SkeletonLoader from "../components/SkeletonLoader";

const page = () => {
  const searchParams = useSearchParams();
  const [allDous, setAllDous] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (!cat) return;
    const fetchCategoryDetails = async (cat_id) => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://duas-page.onrender.com/categories/${cat_id}/details`,
          {
            cache: "no-store",
          }
        );
        const data = await res.json();
        setAllDous(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category details:", error);
      }
    };

    fetchCategoryDetails(cat);
  }, [searchParams]);
if(loading){
  return (
    <SkeletonLoader/>
  )
}
  console.log(allDous);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mr-36">
      {allDous?.map((subCat) => (
        <div key={subCat.subcat_id}>
          {/* sub category name*/}
          <div
            className="flex mb-5 mr-2  flex-row bg-white rounded-lg px-6 py-4 justify-start items-center"
          >
            <p className="text-gray-800 font-medium">
              <span className="text-customGreen">Section: </span>
              {subCat.subcat_name_en}
            </p>
          </div>
          {/* dua section */}
          {subCat.duas?.map((dus) => (
            <div
              key={dus.dua_i}
              className="bg-white shadow-md rounded-lg px-6 pt-6 mb-6 mr-2"
            >
              {/* Title */}
              <div className="flex flex-row  justify-start items-center ">
                <img src="/duacard.svg" alt="duacard" className="mr-3" />
                <p className="text-customGreen font-medium">
                  {dus.dua_id + " " + dus.dua_name_en}
                </p>
              </div>

              {/* Top english */}
              <p className="text-lg text-gray-800 font-semibold mb-4 mt-5">
                {dus.top_en}
              </p>
              {dus.dua_arabic && (
                <p className="text-3xl text-gray-900 leading-relaxed mb-4 mt-5 text-right">
                  {dus.dua_arabic}
                </p>
              )}
              {dus.transliteration_en && (
                <p className="text-lg text-gray-700 font-semibold mb-4 mt-5">
                  <span className="text-gray-900">Transliteration:</span>
                  {dus.transliteration_en}
                </p>
              )}
              {dus.translation_en && (
                <p className="text-lg text-gray-600 font-semibold mb-4 mt-5">
                  <span className="text-gray-700">Translation:</span>
                  {dus.translation_en}
                </p>
              )}

              {/* Reference */}
              <div>
                <p className="mt-5 text-lg font-semibold text-customGreen">
                  Reference:
                </p>
                <div className="mt-1 text-lg font-semibold text-gray-800">
                  <span>{dus.refference_en}</span>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex flex-row items-center justify-between pt-6">
                {dus.audio && 
                <AudioPlayer audio={dus.audio}/>
                }
                <div className="flex items-center  gap-x-6 py-6 xs:gap-x-4">
                  <div id="copy" className="relative w-6">
                    <img
                      className="cursor-pointer"
                      src="/Dua_icon/copy.svg"
                      alt="Copy"
                    />
                  </div>
                  <div id="bookmark" className="relative w-6">
                    <img
                      className="cursor-pointer"
                      src="/Dua_icon/bookmark.svg"
                      alt="Bookmark"
                    />
                  </div>
                  <div id="plan" className="relative w-6">
                    <img
                      className="cursor-pointer"
                      src="/Dua_icon/plan.svg"
                      alt="Plan"
                    />
                  </div>
                  <div id="share" className="relative w-6">
                    <img
                      className="cursor-pointer"
                      src="/Dua_icon/share.svg"
                      alt="Share"
                    />
                  </div>
                  <div id="report" className="relative w-6">
                    <img
                      className="cursor-pointer"
                      src="/Dua_icon/report.svg"
                      alt="Report"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default page;
