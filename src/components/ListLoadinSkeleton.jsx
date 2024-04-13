import React from "react";

const ListLoadinSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row mb-8 md:mb-3 rounded-xl md:p-4 animate-pulse">
      <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl overflow-hidden">
        <div className="h-full w-full bg-gray-200" />
      </div>
      <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden gap-y-3 md:gap-y-6">
        <div className="flex flex-col gap-1">
          <div className="h-6 bg-gray-200 rounded md:w-[45vw] mb-2" />
          <div className="h-4 bg-gray-200 rounded md:w-[40vw] mb-1" />
        </div>
        <div className="h-4 bg-gray-200 rounded w-[80vw] md:w-[30vw]" />
        <div className="flex items-center sm:mt-3">
          <div className="flex items-center mr-3">
            <div className="h-9 w-9 bg-gray-200 rounded-full" />
          </div>
          <div className="h-4 bg-gray-200 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default ListLoadinSkeleton;
