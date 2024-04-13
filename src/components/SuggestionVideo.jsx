/* eslint-disable react/prop-types */

import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";

const SuggestionVideo = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="mb-3 flex flex-col md:flex-row items-start">
        <div className="relative h-56 md:h-24 lg:h-20 xl:h-24 w-full md:w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.videoThumbnails[2]?.url}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-md lg:text-xs xl:text-sm font-semibold line-clamp-2">
            {video?.title}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-medium mt-2 text-white/[0.7] flex items-center">
            {video?.author}
            {video?.author?.type === "VERIFIED_CHANNEL" && (
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
            )}
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.7] truncate overflow-hidden">
            <span>{video?.viewCountText} Views</span>
            <span className="flex text-[24px] leading-none text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideo;
