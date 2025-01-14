import React from 'react';

const SkeletonCategory = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div 
          key={index} 
          className="flex items-center space-x-4 px-4 py-3  rounded-lg w-full animate-pulse"
        > 
          <div className="bg-gray-100 rounded-sm h-[50px] w-[50px]" /> 
          <div className="flex flex-col space-y-3 w-full">
            <div className="h-4 bg-gray-100 rounded w-3/4" /> 
            <div className="h-3 bg-gray-100 rounded w-1/2" /> 
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonCategory;