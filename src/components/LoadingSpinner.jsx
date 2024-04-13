import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-[80vh] md:h-[90vh]">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#FF2900] border-4 h-14 w-14" />
    </div>
  );
}
