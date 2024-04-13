import React from "react";
import { useContext } from "react";
import { ytContext } from "../contextAPI";

const WatchVideoDescription = ({
  isVideoDescriptionVisible,
  setIsVideoDescriptionVisible,
  videoData,
}) => {

  const {setSeekTime} = useContext(ytContext);
  
  const seekVideoTo = (timeInSeconds) => {
    setSeekTime(timeInSeconds);

  };

  // Function to detect and format times in the description
  const formatDescriptionWithTimeLinks = (description) => {
    const timeRegex = /(\d+:\d+)/g; // Matches the pattern for time, e.g., 00:00
    return description.split(timeRegex).map((part, index) => {
      if (part.match(timeRegex)) {
        const timeInSeconds = part
          .split(":")
          .reduce((acc, time) => 60 * acc + +time);
        return (
          <a
            key={index}
            href={`#time=${timeInSeconds}`}
            className="text-blue-500 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              seekVideoTo(timeInSeconds);
            }}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div
      className={
        "bg-[#272727] mt-3 py-3 px-4 rounded-lg relative lg:z-10 hover:bg-[#404040] group " +
        (!isVideoDescriptionVisible && "h-32 overflow-hidden pb-8")
      }
    >
      <div className="text-sm font-bold">
        <span className="pr-3">
          {videoData?.primary_info?.view_count?.text}
        </span>
        <span>{videoData?.primary_info?.relative_date?.text}</span>
      </div>
      <div className="text-sm whitespace-pre-line">
        {videoData?.secondary_info?.description?.text
          ? formatDescriptionWithTimeLinks(
              videoData?.secondary_info?.description?.text
            )
          : ""}
      </div>
      {!isVideoDescriptionVisible && (
        <button
          className="font-bold text-sm absolute bottom-[0px] w-full bg-[#272727] text-gray-300 text-left pb-2 group-hover:bg-[#404040] hover:text-gray-400 "
          onClick={() => setIsVideoDescriptionVisible(true)}
        >
          Show more
        </button>
      )}

      <button
        className="font-bold text-sm pt-6 hover:text-gray-400"
        onClick={() => setIsVideoDescriptionVisible(false)}
      >
        Show less
      </button>
    </div>
  );
};

export default WatchVideoDescription;
