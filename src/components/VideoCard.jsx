import React from 'react'
import { Link } from 'react-router-dom'
import VideoLength from '../utils/VideoLength'
import { abbreviateNumber } from 'js-abbreviation-number'

const VideoCard = ({ video }) => {
  return (
    <div
          className="max-w-2xl w-full hover:scale-[1.02] duration-200"
         
        >
          <Link to={`/video/${video?.id}`}>
            <div className="relative max-w-[500px] xl:min-w-[310px]">
              <img
                className="sm:rounded-xl object-cover w-full h-full"
                src={video?.thumbnail}
                alt={video?.title}
              />
             
              {video?.duration && <VideoLength time={video?.duration} />}
            </div>
            {/* =================== */}
            <div className="mt-3 flex items-start space-x-2 max-sm:px-3">
              <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
                <img src={video?.channelPhoto} alt="avatar" />
              </div>
              <div className="flex flex-col text-md tracking-tighter leading-tight">
                <div className="text-white overflow-ellipsis font-semibold line-clamp-2 max-lines-2 leading-relaxed antialiased">
                  {video?.title}
                </div>
                <Link
                  to={`/channel/${video?.channelId}`}
                  className="mt-1 flex items-baseline space-x-1 hover:text-gray-200"
                >
                  <p className="text-gray-400 hover:text-gray-200 text-sm font-medium antialiased">
                    {video?.channelName}
                  </p>
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
                <div className="text-gray-400 flex antialiased items-center gap-2 text-sm">
                  {abbreviateNumber(video?.views)} views <span>•</span>{" "}
                  {video?.published ? (
                    video?.published
                  ) : (
                    <p className="bg-red-600 text-white px-2 py-0.5 flex gap-1 rounded-md">
                      <span className="animate-pulse ">•</span>
                      Live Now
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </div>
  )
}

export default VideoCard