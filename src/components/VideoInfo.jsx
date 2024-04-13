import React, { useState } from "react";
import { Link } from "react-router-dom";

const VideoInfo = ({ videoData }) => {
  return (
    <div className="mt-5 max-sm:px-3">
      <div className="text font-bold text-xl">
        {videoData?.primary_info?.title?.text}
      </div>
      <div className="flex flex-row mt-4 gap-3 flex-wrap md:flex-nowrap">
        <div className="md:basis-5/12 flex items-center w-full md:w-auto justify-between">
          <div className="flex items-center g-1 w-56">
            <img
              className="rounded-full w-10 h-10"
              src={
                videoData?.secondary_info?.owner?.author?.thumbnails?.[0]?.url
              }
              alt="userimage"
            />
            <div className="font-semibold ml-3 shrink md:shrink flex flex-col">
              <Link to={`/channel/${videoData?.basic_info?.channel_id}`}>
              {videoData?.basic_info?.author}
              </Link>

              <p className="text-xs text-gray-300 font-normal min-w-[50px]">
                {videoData?.secondary_info?.owner?.subscriber_count?.text}
              </p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="px-3 py-2 text-sm font-semibold border border-gray-400 bg-white text-black rounded-full hover:bg-gray-200 transition-all ease-in-out cursor-pointer ">
              Join
            </div>
            <div className="px-4 py-3 ml-3 text-sm font-semibold rounded-full bg-red-600 hover:bg-red-700 text-white transition-all ease-in-out cursor-pointer">
              Subscribe
            </div>
          </div>
        </div>
        <div className="sm:basis-7/12 w-full flex items-center justify-between md:justify-normal md:mt-0 mt-2">
          <div className="flex shrink-0 transition-all ease-in-out cursor-pointer  border-gray-400 md:ml-3 ">
            <div className="px-3 py-2 text-sm font-semibold border-r border-gray-600 rounded-full hover:bg-gray-700 rounded-e-none  bg-gray-800">
              <i className="fa-regular fa-thumbs-up fa-lg"></i>{" "}
              <span className="ml-0.5">
                {
                  videoData?.primary_info?.menu?.top_level_buttons[0]
                    ?.short_like_count
                }
              </span>
            </div>
            <div className="px-3 py-2 text-sm font-semibold border border-gray-800 rounded-full hover:bg-gray-700 rounded-s-none  bg-gray-800">
              <i className="fa-regular fa-thumbs-down fa-lg"></i>
            </div>
          </div>
          <div>
            <div className="px-3 py-2 text-sm font-semibold border border-gray-700 rounded-full hover:bg-gray-700 bg-gray-800 cursor-pointer shrink-0 flex items-center md:ml-3">
              <i className="fa-solid fa-share-nodes fa-lg"></i>
              <span className="ml-1.5 inline ">Share</span>
            </div>
          </div>
          <div>
            <div className="px-3 py-2  text-sm font-semibold border border-gray-700 rounded-full hover:bg-gray-700  bg-gray-800 cursor-pointer shrink-0 flex items-center md:ml-3">
              <i className="fa-solid fa-download fa-lg"></i>
              <span className="ml-1.5  inline ">Download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
