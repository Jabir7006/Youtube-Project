import { Card } from "keep-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ytContext } from "../contextAPI";
import ChannelLayout from "../layouts/ChannelLayout";
import VideoLength from "../utils/VideoLength";
import { getChannelPosts } from "../utils/fetchFromAPI";

const ChannelPosts = () => {
  const [posts, setPosts] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  const { channelId } = useParams();

  const fetchChannelPosts = async () => {
    try {
      const res = await getChannelPosts(channelId);
      setPosts(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChannelPosts();
  }, [channelId]);

  return (
    <ChannelLayout>
      <div className="flex flex-col sm:px-6 gap-5 pb-16">
        {posts.map((post) => (
          <Card
            className="max-w-4xl bg-transparent border-[#404040] max-sm:rounded-none max-sm:border-x-0 max-sm:border-t-0 sm:mx-auto w-full "
            key={post.id}
          >
            <Card.Content className="py-2">
              <Card.Description className="text-gray-200">
                <div className="sm:px-4 py-2 text-base rounded-lg d">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <p className="inline-flex items-center mr-3 text-sm font-semibold">
                        {post.author && post.author.thumbnails.length > 0 && (
                          <img
                            className="mr-2 w-9 h-9 rounded-full"
                            src={post?.author?.thumbnails[0]?.url}
                            alt="profile picture"
                          />
                        )}

                        {post?.author?.name}
                      </p>
                      <p className="text-sm">{post?.published?.text}</p>
                    </div>
                  </div>
                  <p className="">{post?.content?.text}</p>

                  <div className="flex shrink-0 transition-all ease-in-out cursor-pointer  border-gray-400 md:ml-3 my-1 text-gray-400 sm:max-w-2xl">
                    {post?.attachment && post?.attachment?.image && (
                      <img
                        className="w-full rounded-lg object-cover"
                        src={post?.attachment?.image[0]?.url}
                        alt="post image"
                      />
                    )}
                    {post?.attachment && post?.attachment?.type === "Video" && (
                      <Link
                        to={`/video/${post?.attachment?.id}`}
                        className="flex flex-col md:flex-row items-start gap-4 relative"
                      >
                        <div className="relative">
                          <img
                            alt="Thumbnail"
                            className="aspect-video rounded-lg object-cover w-full"
                            height={94}
                            src={post?.attachment?.thumbnails[0]?.url}
                            width={168}
                          />

                          {post?.attachment?.duration && (
                            <VideoLength
                              time={post?.attachment?.duration?.seconds}
                            />
                          )}
                        </div>
                        <div className="text-sm text-gray-200  max-sm:bg-[#404040] p-2 rounded-lg w-full">
                          <div className="font-medium line-clamp-2">
                            {post?.attachment?.title?.text}
                          </div>
                          <div className="text-xs text-gray-200 line-clamp-1 sm:text-gray-400">
                            {post?.attachment?.author?.name}
                          </div>
                          <div className="text-xs text-gray-200 line-clamp-1 sm:text-gray-400">
                            {post?.attachment?.short_view_count?.text} ·{" "}
                            {post?.attachment?.published?.text}
                          </div>
                          <p className="line-clamp-2 hidden sm:block text-gray-400 text-xs mt-3">
                            {post?.attachment?.description_snippet?.text}
                          </p>
                        </div>
                      </Link>
                    )}



                  </div>

                  <div className="flex shrink-0 transition-all ease-in-out cursor-pointer border-gray-400 md:ml-3 my-1 text-gray-400">
                    <div className="px-3 py-2 text-sm font-semibold">
                      <i className="fa-regular fa-thumbs-up fa-lg"></i>{" "}
                      <span className="ml-0.5">{post?.vote_count?.text}</span>
                    </div>
                    <div className="px-3 py-2 text-sm font-semibold ">
                      <i className="fa-regular fa-thumbs-down fa-lg"></i>
                    </div>

                    <div className="px-3 py-2 text-sm font-semibold text-gray-200 rounded-full hover:bg-[#404040]">
                      Reply
                    </div>
                  </div>

                  {/* {comment?.isHasReplies && (
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
              )} */}
                </div>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
      </div>
    </ChannelLayout>
  );
};

export default ChannelPosts;
