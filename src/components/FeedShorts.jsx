import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ytContext } from "../contextAPI";
import { getTrendingShorts } from "../utils/fetchFromAPI";

const FeedShorts = () => {
  const [feedShorts, setFeedShorts] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  const fetchShorts = async () => {
    try {
      setLoading(true); // Set loading state to true before fetching data
      const res = await getTrendingShorts();
      setFeedShorts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShorts();
  }, []);
  console.log(feedShorts);
  return (
    <>
      {/* Display loading message or spinner if loading */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-8 px-3">
          {feedShorts?.slice(0, 5).map((video, index) => (
            <Link
              to={`/video/${video?.id}`}
              className="flex flex-col items-start gap-2 relative"
              key={index}
            >
              <img
                alt="Thumbnail"
                className="h-[250px] sm:h-[300px] md:h-[350px] w-full rounded-xl object-cover"
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
      )}
    </>
  );
};

export default FeedShorts;
