/* eslint-disable react/prop-types */

import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";

const RelevantVideo = ({ video }) => {
  return (
    <Link to={`/video/${video?.id}`}>
      <div className="mb-3 flex flex-col md:flex-row items-start">
        <div className="relative h-56 md:h-24 lg:h-20 xl:h-24 w-full md:w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
          />
          {video?.duration && <VideoLength time={video?.duration?.seconds} />}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-md lg:text-xs xl:text-sm font-semibold line-clamp-2">
            {video?.title?.text}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-medium mt-2 text-white/[0.7] flex items-center">
            {video?.author?.name}
            {video?.author?.is_verified && (
              <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
            )}
          </span>
          <div className="text-[12px] lg:text-[10px] xl:text-[12px] text-white/[0.7] truncate overflow-hidden flex items-center gap-2">
            <span>{video?.short_view_count?.text}</span>
            <span className="font-bold">•</span>{" "}
            <span className="truncate">{video?.published?.text}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RelevantVideo;
