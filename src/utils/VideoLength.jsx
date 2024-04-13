import moment from "moment/moment";

function VideoLength({ time }) {
  const videoLength = moment().startOf("day").seconds(time);
  let videoLengthFormatted = videoLength?.format && videoLength?.format("mm:ss");

  // Check if the duration is greater than an hour
  if (videoLength?.hours && videoLength?.hours() > 0) {
    videoLengthFormatted = videoLength?.format && videoLength?.format("H:mm:ss");
  }

  return (
    <div className="absolute bottom-2 right-2 bg-black py-[2px] px-1 text-xs rounded text-white font-semibold">
      {videoLengthFormatted}
    </div>
  );
}

export default VideoLength;
