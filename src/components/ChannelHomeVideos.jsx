import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ytContext } from "../contextAPI";
import { getChannel } from "../utils/fetchFromAPI";
import LoadingSkeleton from "./LoadingSkeleton";
import LoadingSpinner from "./LoadingSpinner";
import VideoLength from "../utils/VideoLength";

const ChannelHomeVideos = ({ channelId }) => {
  const { loading, setLoading } = useContext(ytContext);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        setLoading(true);
        const response = await getChannel(channelId);
        setLoading(false);
        setVideos(response?.latestVideos);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchChannel();
  }, [channelId]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-16">
      {videos?.map((video) => (
        <Link
          to={`/video/${video?.videoId}`}
          className="flex flex-row md:flex-col items-start gap-4 relative"
          key={video?.videoId}
        >
         <div className="relative">
         <img
            alt="Thumbnail"
            className="aspect-video rounded-lg object-cover max-md:max-w-[164px] md:w-full"
            height={94}
            src={video?.videoThumbnails[0]?.url}
            width={168}
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
         </div>
          <div className="text-sm">
            <div className="font-medium line-clamp-2">{video?.title}</div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              {video?.author}
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              {video?.viewCountText} · {video?.publishedText}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChannelHomeVideos;
