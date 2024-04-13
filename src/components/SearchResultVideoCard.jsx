
/* eslint-disable react/prop-types */
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";

function SearchResultVideoCard({ video }) {
  return (
    <>
      <Link to={`/video/${video?.id}`}>
        <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4 duration-200">
          <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails?.[0]?.url}
              alt={video?.title?.text}
            />
            {video?.duration?.seconds && <VideoLength time={video?.duration?.seconds} />}
          </div>
          <div className="flex  flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
            <div className="flex flex-col gap-1">
              <span className="text-lg md:text-xl font-medium line-clamp-2">
                {video?.title?.text}
              </span>

              <div className="text-gray-400 flex items-center gap-2 text-sm">
                {video?.short_view_count?.text} <span>•</span>{" "}
                {video?.published?.text}
              </div>
            </div>
            <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-4">
              {video?.description || "follow me on instagram"}
            </span>
            <div className="flex items-center mt-2">
              <div className="flex items-center mr-3">
                <div className="flex h-7 w-7 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.thumbnails?.[0]?.url}
                    alt="avatar"
                  />
                </div>
              </div>

              <Link to={`/channel/${video?.author?.id}`} className="">
                <span className="text-sm mt-2 text-white/[0.7] hover:text-gray-100 flex items-center">
                  {video?.author?.name}
                  {video?.author?.badges[0]?.icon_type ===
                    "CHECK_CIRCLE_THICK" && (
                    <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                  )}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Link>

      {/* {video.type === "channel" && (
     
        <div className="flex flex-col ">
           <img src={video.authorThumbnails[0]?.url} alt="" />
           <p>{video.author}</p>
           <p>{video.subCount}</p>
        </div>
    
  )} */}
    </>
  );
}

export default SearchResultVideoCard;
