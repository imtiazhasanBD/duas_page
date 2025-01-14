const SkeletonLoader = () => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 animate-pulse w-full mr-36">
      {/* Skeleton for each subcategory */}
      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="mb-6">
          {/* Subcategory skeleton */}
          <div className="flex mb-5 mr-2 flex-row bg-white rounded-lg px-6 py-4 justify-start items-center">
            <div className="bg-gray-100 rounded-lg px-6 py-4 w-1/2 h-6"></div>
          </div>

          {/* Skeleton for dua cards */}
          {[...Array(2)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg px-6 pt-6 mb-6 mr-2"
            >
              {/* Title */}
              <div className="flex flex-row items-center mb-5">
                <div className="w-12 h-12 bg-gray-100 rounded-full mr-3"></div>
                <div className="h-6 bg-gray-100 rounded w-1/3"></div>
              </div>

              <div className="h-5 bg-gray-100 rounded w-3/4 mb-4"></div>
              <div className="h-8 bg-gray-100 rounded w-full mb-4"></div>
              <div className="h-5 bg-gray-100 rounded w-3/4 mb-4"></div>
              <div className="h-5 bg-gray-100 rounded w-3/4 mb-4"></div>
              <div className="h-5 bg-gray-100 rounded w-1/4 mb-4"></div>

              {/* Action icons */}
              <div className="flex flex-row items-center justify-between py-6">
                <div className="h-12 w-12 bg-gray-100 rounded-full"></div>
                <div className="flex items-center gap-x-6 xs:gap-x-4">
                  {[...Array(5)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 bg-gray-100 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
