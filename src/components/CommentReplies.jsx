import React from "react";

const CommentReplies = ({ reply }) => {
  const { author, content, likes, published, authorImage } = reply;
  return (
    <article className="px-4 mb-3 ml-6 lg:ml-12 text-base rounded-lg w-full">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center max-w-3xl">
          <p className="inline-flex items-center mr-3 text-sm font-semibold">
            <img
              className="mr-2 w-7 h-7 rounded-full"
              src={authorImage}
              alt="profile picture"
            />
            {author}
          </p>
          <p className="text-sm">
            <time dateTime="2022-02-12" title="February 12th, 2022">
              {published.text}
            </time>
          </p>
        </div>
      </footer>
      <p className="">{content}</p>

      <div className="flex shrink-0 transition-all ease-in-out cursor-pointer  border-gray-400 md:ml-3 my-1 text-gray-400">
        <div className="px-3 py-2 text-sm font-semibold">
          <i className="fa-regular fa-thumbs-up fa-lg"></i>{" "}
          <span className="ml-0.5">{likes}</span>
        </div>
        <div className="px-3 py-2 text-sm font-semibold ">
          <i className="fa-regular fa-thumbs-down fa-lg"></i>
        </div>

        <div className="px-3 py-2 text-sm rounded-full font-semibold text-gray-200 hover:bg-[#404040]">
          <i className="fa-solid fa-reply mr-2"></i>
          Reply
        </div>
      </div>
    </article>
  );
};

export default CommentReplies;
