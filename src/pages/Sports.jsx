import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { ytContext } from "../contextAPI";
import VideoLength from "../utils/VideoLength";
import { getSportsVideos } from "../utils/fetchFromAPI";
import Layout from "../layouts/Layout";

function Sports() {
  const [sportsVideos, setSportsVideos] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  useEffect(() => {
    const fetchSportsVideos = async () => {
      try {
        setLoading(true);
        const response = await getSportsVideos();

        setSportsVideos(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchSportsVideos();
  }, []);

  return (
    <Layout>
      <section className="w-full flex-1">
        <div className="flex items-center px-5 py-4 gap-4 ">
          <img
            src="https://yt3.googleusercontent.com/mUhuJiCiL8jf0Ngf9sh7BFBZCO0MUL2JyH_5ElHbV2fd13hxZ9zQ3-x-YePA_-PCUUH360G0=s88-c-k-c0x00ffffff-no-rj-mo"
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
            alt="sports"
          />
          <h2 className="text-2xl lg:text-4xl font-bold">Sports</h2>
        </div>
        <div className="sm:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {sportsVideos?.map((video, i) => (
            <div
              className="max-w-2xl w-full py-4 sm:px-3 hover:scale-[1.02] duration-200"
              key={i}
            >
              <Link to={`/video/${video?.id}`}>
                <div className="relative">
                  <img
                    className="sm:rounded-xl"
                    src={video?.thumbnails[0]?.url}
                    alt={video?.title?.text}
                  />
                  {video?.duration && (
                    <VideoLength time={video?.duration?.seconds} />
                  )}
                </div>
                {/* =================== */}
                <div className="mt-3 flex items-start space-x-2 max-sm:px-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
                    <img src={video?.author?.thumbnails[0]?.url} alt="avatar" />
                  </div>
                  <div className="flex flex-col text-md tracking-tighter leading-tight">
                    <div className="text-white overflow-ellipsis font-semibold max-lines-2">
                      {video?.title?.text}
                    </div>
                    <Link to={`/channel/${video?.author?.id}`} className="mt-1 flex items-baseline space-x-1">
                      <div className="text-gray-400 hover:text-gray-200">{video?.author?.name}</div>
                      {video?.author?.is_verified && (
                        <div className="w-3 h-3 pt-0.5">
                          <svg
                            viewBox="0 0 24 24"
                            className="text-gray-400"
                            fill="currentColor"
                          >
                            <g>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
                              />
                            </g>
                          </svg>
                        </div>
                      )}
                    </Link>
                    <div className="text-gray-400 flex items-center gap-2">
                      {video?.short_view_count?.text} <span>•</span>{" "}
                      {video?.published?.text}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {loading && <LoadingSkeleton count={9} />}
        </div>
      </section>
    </Layout>
  );
}
export default Sports;
