import React from "react";

import CommentList from "./CommentList";

const CommentsContainer = ({ comments }) => {
  // useEffect(() => {
  //   getVideoComments();
  // }, [videoId]);

  // const getVideoComments = async () => {
  //   try {
  //     const response = await getComments(videoId);
  //     setComments(response);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error fetching video comments:", error);
  //   }
  // };

  if (comments === undefined) return null;

  return (
    <div className="">
      {/* <CommentList comments={comments} /> */}
    </div>
  );
};

export default CommentsContainer;
