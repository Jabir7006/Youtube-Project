import React, { useContext, useState } from "react";


import { ytContext } from "../contextAPI";
import WatchVideoDescription from "./WatchVideoDescription";


const VideoDescription = ({videoData}) => {

  const {commentsCount}= useContext(ytContext)

  const [isVideoDescriptionVisible, setIsVideoDescriptionVisible] =
    useState(false);
 
 



  return (
    <div className="px-2 py-4">

      <WatchVideoDescription
        isVideoDescriptionVisible={isVideoDescriptionVisible}
        setIsVideoDescriptionVisible={setIsVideoDescriptionVisible}
        videoData={videoData}
      />

      <div className="py-6 flex gap-10 items-center">
        <span className="font-semibold text-xl">
          {commentsCount}
        </span>
        <span className="text-sm font-semibold flex items-center gap-2 hover:bg-[#404040] px-2 py-1 rounded cursor-pointer">
        <i className="fa-solid fa-sort"></i>
          Sort by
          </span>
      </div>

      <div className="flex gap-4 mb-4 w-full pl-5">
        <img
          className="w-10 rounded-full"
          src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj"
          alt="user-profile"
        />
        <input
          type="text"
          className="border-b border-[#404040] outline-none focus:border-gray-100 w-full self-baseline py-1 placeholder:text-gray-400 bg-transparent"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
};

export default VideoDescription;