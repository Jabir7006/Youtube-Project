import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { ytContext } from "../contextAPI";
import ChannelLayout from "../layouts/ChannelLayout";
import { getChannelShorts, getChannelVideos } from "../utils/fetchFromAPI";

const ChannelShorts = () => {
  const [selectedButton, setSelectedButton] = useState("Latest"); // State to track selected button
  const [shorts, setShorts] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  const { channelId } = useParams();

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setLoading(true);
  };

  const fetchChannelVideos = async () => {
    try {
      const res = await getChannelShorts(channelId, selectedButton);
      setShorts(res);
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

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-8">
          {shorts?.map((video, index) => (
            <Link
              to={`/video/${video?.id}`}
              className="flex flex-col items-start gap-2 relative"
              key={index}
            >
              <img
                alt="Thumbnail"
                className="h-full w-full rounded-xl object-cover"
                src={video?.thumbnails[0]?.url}
              />
              <div className="text-sm">
                <div className="font-medium line-clamp-2">
                  {video?.title?.text}
                </div>

                <div className="text-xs text-gray-300 line-clamp-1 mt-1 dark:text-gray-400">
                  {video?.views?.text}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ChannelLayout>
  );
};

export default ChannelShorts;
