import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { ytContext } from "../contextAPI";
import ChannelLayout from "../layouts/ChannelLayout";
import { getChannelVideos } from "../utils/fetchFromAPI";
import VideoLength from "../utils/VideoLength";

const ChannelVideos = () => {
  const [selectedButton, setSelectedButton] = useState("Latest"); // State to track selected button
  const [videos, setVideos] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  const { channelId } = useParams();

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setLoading(true); // Set loading to true when button changes
  };

  const fetchChannelVideos = async () => {
    try {
      const res = await getChannelVideos(channelId, selectedButton);
      setVideos(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChannelVideos();
  }, [channelId, selectedButton]);

  return (
    <ChannelLayout>
      {loading && <LoadingSpinner />}
      <div className="px-3 flex flex-col gap-4 pb-16">
        <div className="flex gap-2">
          <button
            className={`py-1.5 px-2 text-sm rounded-md font-semibold antialiased  ${
              selectedButton === "Latest"
                ? "bg-white text-gray-700"
                : "bg-[#3F3F3F] text-white"
            }`}
            onClick={() => handleButtonClick("Latest")}
          >
            Latest
          </button>
          <button
            className={`py-1.5 px-2 text-sm rounded-md font-semibold antialiased ${
              selectedButton === "Popular"
                ? "bg-white text-gray-700"
                : "bg-[#3F3F3F] text-white"
            }`}
            onClick={() => handleButtonClick("Popular")}
          >
            Popular
          </button>
          <button
            className={`py-1.5 px-2 text-sm rounded-md font-semibold antialiased ${
              selectedButton === "Oldest"
                ? "bg-white text-gray-700"
                : "bg-[#3F3F3F] text-white"
            }`}
            onClick={() => handleButtonClick("Oldest")}
          >
            Oldest
          </button>
        </div>

        {/* ===========================Videos========================= */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {videos?.map((video, index) => (
            <Link
              to={`/video/${video?.id}`}
              className="flex flex-row md:flex-col items-start gap-4 relative"
              key={index}
            >
              <div className="relative">
                <img
                  alt="Thumbnail"
                  className="aspect-video rounded-lg object-cover max-md:max-w-[164px] md:w-full"
                  height={94}
                  src={video?.thumbnails[0]?.url}
                  width={168}
                />

                {video?.duration && (
                  <VideoLength time={video?.duration?.seconds} />
                )}
              </div>
              <div className="text-sm">
                <div className="font-medium line-clamp-2">
                  {video?.title?.text}
                </div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                  {video?.author?.name}
                </div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                  {video?.short_view_count?.text} · {video?.published?.text}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ChannelLayout>
  );
};

export default ChannelVideos;
