import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { NavLink } from "react-router-dom";

const ChannelHeader = ({ channelId, channelInfo }) => {
  const channelTabs = [
    { text: "Home", route: `/channel/${channelId}` },
    { text: "Videos", route: `/channel/${channelId}/videos` },
    { text: "Shorts", route: `/channel/${channelId}/shorts` },
    { text: "Community", route: `/channel/${channelId}/posts` },
  ];

  return (
    <>
      <div className="rounded-lg overflow-hidden">
        {channelInfo.authorBanners && channelInfo.authorBanners.length > 0 && (
          <img
            alt="Banner"
            src={channelInfo.authorBanners[0]?.url}
            className="w-full h-full"
          />
        )}
      </div>
      <div className="px-4 grid gap-4">
        <div className="flex flex-col max-md:justify-center items-center md:flex-row md:items-start gap-2 md:gap-4">
          {channelInfo.authorThumbnails &&
            channelInfo.authorThumbnails.length > 0 && (
              <img
                alt="Avatar"
                className="max-[420px]:w-16 max-[420px]:h-16 h-24 w-24 md:h-32 md:w-32 rounded-full"
                src={channelInfo.authorThumbnails[4]?.url}
              />
            )}
          <div className="grid gap-1.5 place-items-center md:place-items-start w-full">
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-medium sm:text-2xl lg:text-3xl lg:font-bold">
                {channelInfo?.author}
              </h1>

              {channelInfo?.authorVerified && (
                <div className="w-5 h-5 md:w-7 md:h-7 pt-0">
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
            </div>
            <div className="flex items-center gap-2">
              <div className=" text-gray-400 text-sm font-medium antialiased">
                {channelInfo.subCount ? (
                  abbreviateNumber(channelInfo?.subCount) + " Subscribers"
                ) : (
                  <div className="w-32 h-5 rounded animate-pulse"></div>
                )}
              </div>
            </div>
            <div className="max-md:mx-auto mt-2 md:mt-3 w-full">
              <button className="bg-[#FF2900] hover:bg-[#FF2900]/90 text-white font-medium px-4 py-1.5 rounded-md md:rounded-full max-md:w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =================================== */}

      <div className="font-medium text-center text-[#AAAAAA] border-b border-gray-500 sticky top-0 bg-[#131314] z-20 ">
        <ul className="flex flex-wrap -mb-px bsl overflow-x-scroll">
          {channelTabs.map((tab) => (
            <li className="" key={tab.text}>
              <NavLink
                to={tab.route}
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-300"
              >
                {tab.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChannelHeader;
