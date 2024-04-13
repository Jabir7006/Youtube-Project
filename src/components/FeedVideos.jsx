import { abbreviateNumber } from "js-abbreviation-number";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ytContext } from "../contextAPI";
import VideoLength from "../utils/VideoLength";
import LoadingSkeleton from "./LoadingSkeleton";
import VideoCard from "./VideoCard";
import FeedShorts from "./FeedShorts";

const FeedVideos = ({ feedVideos }) => {
  const { loading, setLoading } = useContext(ytContext);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-5">
        {/* Render first two rows of regular videos */}
        {feedVideos?.slice(0, 6).map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}

        {loading && <LoadingSkeleton count={9} />}
      </div>

      {/* Render shorts */}
      <div className="pb-24 pt-10">
        <div className="flex items-center gap-2 pb-4 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width={25}
            height={25}
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 25.049 54.331 c -1.651 -0.978 -3.118 -1.834 -4.646 -2.69 c -4.34 -2.506 -7.641 -6.174 -8.497 -11.126 c -1.345 -7.947 -0.122 -14.671 8.314 -19.745 c 10.637 -6.358 21.396 -12.41 32.155 -18.584 c 10.515 -5.991 24.391 0.978 25.981 13.021 c 1.1 7.336 -2.506 14.549 -9.047 18.095 c -1.406 0.795 -2.873 1.651 -4.463 2.629 c 1.589 0.917 2.934 1.773 4.34 2.567 c 11.187 6.296 12.654 21.151 2.812 29.343 c -1.956 1.589 -4.279 2.751 -6.48 4.035 c -9.231 5.38 -18.523 10.759 -27.815 16.016 c -8.619 4.646 -19.379 1.345 -24.024 -7.275 c -4.401 -8.192 -1.712 -18.339 6.113 -23.291 C 21.565 56.41 23.215 55.431 25.049 54.331 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(253,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
              />
              <polygon
                points="36.36,58.55 59.47,45.16 36.36,31.84 "
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,255,255)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="  matrix(1 0 0 1 0 0) "
              />
            </g>
          </svg>

          <h3 className="text-2xl font-semibold">Shorts</h3>
        </div>
        <FeedShorts />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-5">
        {/* Render rest of the videos */}
        {feedVideos?.slice(6).map((video, i) => (
          <VideoCard key={i} video={video} />
        ))}
        {loading && <LoadingSkeleton count={9} />}
      </div>
    </>
  );
};

export default FeedVideos;
