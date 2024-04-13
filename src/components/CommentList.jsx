import React, { useContext, useEffect, useState } from "react";
import CommentReplies from "./CommentReplies";
import { ytContext } from "../contextAPI";
import { getComments } from "../utils/fetchFromAPI";
import LoadingSpinner from "./LoadingSpinner";

const CommentList = ({ videoId }) => {
  const [expandedComments, setExpandedComments] = useState({});
  const [videoDetails, setVideoDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const { seekTime, loading, setLoading, setCommentsCount } = useContext(ytContext);


  const fetchVideoComments = async () => {
    try {
      setLoading(true);
      const response = await getComments(videoId);
      setComments(response.comments);
      setCommentsCount(response.totalComments);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching video comments:", error);
      setLoading(false);
    }
  };

  const toggleReplies = (index) => {
    setExpandedComments((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    fetchVideoComments();
  }, [videoId]);

  return (
    <section className="py-2 antialiased text-gray-300">
    
      <div className="pr-8">
        {comments?.map((comment, index) => (
          <React.Fragment key={index}>
            <article className="px-4 py-2 text-base rounded-lg d">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold">
                    <img
                      className="mr-2 w-9 h-9 rounded-full"
                      src={comment?.authorImage}
                      alt="profile picture"
                    />
                    {comment?.author}
                  </p>
                  <p className="text-sm">
                    <time dateTime="2022-02-08" title="February 8th, 2022">
                      {comment?.published?.text}
                    </time>
                  </p>
                </div>
              </footer>
              <p className="">{comment?.content}</p>

              <div className="flex shrink-0 transition-all ease-in-out cursor-pointer  border-gray-400 md:ml-3 my-1 text-gray-400">
                <div className="px-3 py-2 text-sm font-semibold">
                  <i className="fa-regular fa-thumbs-up fa-lg"></i>{" "}
                  <span className="ml-0.5">{comment?.likes}</span>
                </div>
                <div className="px-3 py-2 text-sm font-semibold ">
                  <i className="fa-regular fa-thumbs-down fa-lg"></i>
                </div>

                <div className="px-3 py-2 text-sm font-semibold text-gray-200 rounded-full hover:bg-[#404040]">
                  Reply
                </div>
              </div>

              {comment?.isHasReplies && (
                <div className="flex items-center space-x-4 ">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-blue-500 font-medium hover:bg-blue-500 hover:bg-opacity-30 px-2 py-1 rounded-md cursor-pointer ms-5"
                    onClick={() => toggleReplies(index)}
                  >
                    {!expandedComments[index] ? (
                      <i className="fa-solid fa-caret-down"></i>
                    ) : (
                      <i className="fa-solid fa-caret-up"></i>
                    )}
                    {comment?.replyCount} replies
                  </button>
                </div>
              )}
            </article>
            {comment?.isHasReplies &&
              expandedComments[index] &&
              comment?.replies?.map((reply, replyIndex) => (
                <div key={replyIndex} className="ml-3 max-w-3xl ms-auto">
                  <CommentReplies reply={reply} />
                </div>
              ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CommentList;
