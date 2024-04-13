import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../components/CommentList";
import RelevantVideo from "../components/RelevantVideo";
import VideoDescription from "../components/VideoDescription";
import VideoInfo from "../components/VideoInfo";
import { ytContext } from "../contextAPI";
import Layout from "../layouts/Layout";
import { apiUrl, getComments } from "../utils/fetchFromAPI";
import LoadingSpinner from "../components/LoadingSpinner";

function VideoDetail() {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);
  const { seekTime, loading, setLoading } = useContext(ytContext);
  const videoPlayerRef = useRef(null);

 

  useEffect(() => {
    fetchVideoDetails();
  
  }, [videoId]);

  useEffect(() => {
    if (seekTime !== null && videoPlayerRef.current) {
      videoPlayerRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "seekTo",
          args: [seekTime, true],
        }),
        "*"
      );
    }
  }, [seekTime]);

  const fetchVideoDetails = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getvideoinfo/${videoId}`);
      setVideoDetails(response.data);
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  return (
    <Layout>
   
      <div className="flex flex-row flex-wrap lg:flex-nowrap">
        <div className="sm:mt-4">
          <div className="youtube-video-container px-0">
            <iframe
              ref={videoPlayerRef}
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg max-w-[100%] min-[360px]:w-full h-[230px] min-[360px]:h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] lg:w-[98%] object-fill sm:h-10/12 video"
              style={{ border: 0 }}
              autoPlay
            ></iframe>
          </div>
          <VideoInfo videoData={videoDetails} />
          <VideoDescription
            videoData={videoDetails}
            
          />
          <CommentList videoId={videoId} />
          {loading && (
            <div className="text-white text-center text-2xl">
              Loading comments...
            </div>
          )}
        </div>
        <div className="px-3 w-full">
          <h4 className="text-xl font-semibold pt-3 pb-6 max-md:border-t border-gray-400">
            Up Next
          </h4>
          {videoDetails?.watch_next_feed?.map((video) => (
            <RelevantVideo video={video} key={video?.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default VideoDetail;
