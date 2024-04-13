import React, { useContext, useEffect, useState } from "react";
import TrendingLayout from "../layouts/TrendingLayout";
import { ytContext } from "../contextAPI";
import { getMusicVideos } from "../utils/fetchFromAPI";
import ListLoadinSkeleton from "./../components/ListLoadinSkeleton";
import VideoItem from "./../components/TrendingVideoItem";
import Layout from "../layouts/Layout";

function Music() {
  const [musicVideos, setMusicVideos] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  useEffect(() => {
    const fetchMusicVideos = async () => {
      try {
        setLoading(true);
        const response = await getMusicVideos();

        setMusicVideos(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMusicVideos();
  }, []);

  return (
    <Layout>
      <TrendingLayout className="flex flex-row h-[calc(100%-56px)]">
        <div className="grow h-full overflow-y-auto">
          <div className="grid grid-cols-1">
            {musicVideos.map((video, i) => (
              <VideoItem key={i} video={video} loading={loading} />
            ))}
            {loading &&
              Array.from({ length: 10 }, (_, index) => (
                <ListLoadinSkeleton key={index} />
              ))}
          </div>
        </div>
      </TrendingLayout>
    </Layout>
  );
}
export default Music;

// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import LoadingSkeleton from "../components/LoadingSkeleton";
// import VideoLength from "../utils/VideoLength";
// import { ytContext } from "../contextAPI";
// import { getMusicVideos } from "../utils/fetchFromAPI";
// import TrendingLayout from "../components/TrendingLayout";
// import { BsFillCheckCircleFill } from "react-icons/bs";

// function Music() {
//   const [musicVideos, setMusicVideos] = useState([]);
//   const { loading, setLoading } = useContext(ytContext);

//   useEffect(() => {
//     const fetchMusicVideos = async () => {
//       try {
//         setLoading(true);
//         const response = await getMusicVideos();

//         setMusicVideos(response);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchMusicVideos();
//   }, []);

//   return (
//     <TrendingLayout className="flex flex-row h-[calc(100%-56px)]">
//     <div className="grow h-full overflow-y-auto">
//       <div className="grid grid-cols-1">
//         {musicVideos?.map((video, i) => {
//           return (
//             <Link to={`/video/${video?.id}`} key={i}>
//               <div className="flex flex-col md:flex-row mb-8 md:mb-0 lg:hover:bg-white/[0.1] rounded-xl md:p-4 duration-200">
//                 <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 md:rounded-xl overflow-hidden">
//                   <img
//                     className="h-full w-full object-cover"
//                     src={video?.thumbnails?.[0]?.url}
//                     alt={video?.title?.text}
//                   />
//                   {video?.duration?.seconds && (
//                     <VideoLength time={video?.duration?.seconds} />
//                   )}
//                 </div>
//                 <div className="flex  flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
//                   <div className="flex flex-col gap-1">
//                     <span className="text-lg md:text-xl font-medium line-clamp-2">
//                       {video?.title?.text}
//                     </span>

//                     <div className="text-gray-400 flex items-center gap-2 text-sm">
//                       {video?.short_view_count?.text} <span>•</span>{" "}
//                       {video?.published?.text}
//                     </div>
//                   </div>

//                   <div className="flex items-center mt-2">
//                     <div className="flex items-center mr-3">
//                       <div className="flex h-7 w-7 rounded-full overflow-hidden">
//                         <img
//                           className="h-full w-full object-cover"
//                           src={video?.author?.thumbnails?.[0]?.url}
//                           alt="avatar"
//                         />
//                       </div>
//                     </div>
//                     <div className="">
//                       <span className="text-sm mt-2 text-white/[0.7] flex items-center">
//                         {video?.author?.name}
//                         {video?.author?.badges[0]?.icon_type ===
//                           "CHECK_CIRCLE_THICK" && (
//                           <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
//                         )}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}

//         {loading &&
//           Array.from({ length: 10 }, (_, index) => (
//             <div
//               className="flex flex-col md:flex-row mb-8 md:mb-3 rounded-xl md:p-4 animate-pulse"
//               key={index}
//             >
//               <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl overflow-hidden">
//                 <div className="h-full w-full bg-gray-200" />
//               </div>
//               <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden gap-y-3 md:gap-y-6">
//                 <div className="flex flex-col gap-1">
//                   <div className="h-6 bg-gray-200 rounded md:w-[45vw] mb-2" />
//                   <div className="h-4 bg-gray-200 rounded md:w-[40vw] mb-1" />
//                 </div>
//                 <div className="h-4 bg-gray-200 rounded w-[80vw] md:w-[30vw]" />
//                 <div className="flex items-center sm:mt-3">
//                   <div className="flex items-center mr-3">
//                     <div className="h-9 w-9 bg-gray-200 rounded-full" />
//                   </div>
//                   <div className="h-4 bg-gray-200 rounded w-1/4" />
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   </TrendingLayout>
//   );
// }
// export default Music;
