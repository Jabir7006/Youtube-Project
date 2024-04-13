import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoLength from "../utils/VideoLength";
import LoadingSkeleton from "../components/LoadingSkeleton";
import axios from "axios";

function TestPage() {
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/feed");

        setTrendingVideos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTrendingVideos();
  }, []);

  return (
   <div>hello world</div>
  );
}
export default TestPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // For making API requests
// import LoadingSkeleton from '../components/LoadingSkeleton';
// import { Link } from 'react-router-dom';
// import VideoLength from '../utils/VideoLength';
// import { abbreviateNumber } from 'js-abbreviation-number';

// function TestPage() {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
//       setSearchResults(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//      const fetchVideos = async () => {
//        try {
//          setLoading(true);
//          const response = await axios.get(`http://localhost:5000/api/trending`);
//          setVideos(response.data);
//          setLoading(false);
//        } catch (error) {
//          console.error(error);
//          setLoading(false);
//        }
//      }

//      fetchVideos();
//   }, [])

//   return (
//     <section className="w-full lg:max-w-[78%] lg:ms-auto flex-1">
//     <div className="sm:px-5 lg:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
//       {videos?.map((video, index) => (
//         <div className="max-w-2xl w-full p-4 hover:scale-[1.02] duration-200" key={index}>
//            <Link to={`/video/${video?.id}`}>
//           <div className="relative">
//             <img
//               className="rounded-xl"
//               src={video?.thumbnails[0]?.url}
//               alt={video.title}
//             />
//               {video?.duration && <VideoLength time={video?.duration} />}
//           </div>
//           <div className="mt-3 flex items-start space-x-2">
//             <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
//               <img
//                src={video?.channelPhoto}
//                alt={video.title}
//               />
//             </div>
//             <div className="flex flex-col text-md tracking-tighter leading-tight">
//               <div className="text-white overflow-ellipsis font-semibold max-lines-2">
//                 {video?.title}
//               </div>
//               <div className="mt-1 flex items-baseline space-x-1">
//                 <div className="text-gray-400">{video?.channelName}</div>
//                {video.channel === null && (
//                  <div className="w-3 h-3 pt-0.5">
//                  <svg
//                    viewBox="0 0 24 24"
//                    className="text-gray-400"
//                    fill="currentColor"
//                  >
//                    <g>
//                      <path
//                        fillRule="evenodd"
//                        clipRule="evenodd"
//                        d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
//                      />
//                    </g>
//                  </svg>
//                </div>
//                )}
//               </div>
//               <div className="text-gray-400 flex items-center gap-2">
//                 {abbreviateNumber(video.viewCount)} views <span>•</span>{" "}
//                {video.uploadDate === null || video.uploadDate === undefined ? <span className="bg-red-600 text-white px-1 py-0.5 rounded text-xs">Live now</span> : video?.uploadDate}

//               </div>
//             </div>
//           </div>
//           </Link>
//         </div>
//       ))}
//       {loading && <LoadingSkeleton count={9} />}
//     </div>
//   </section>
//   );
// }

// export default TestPage;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import LoadingSkeleton from '../components/LoadingSkeleton';
// import { Link } from 'react-router-dom';
// import VideoLength from '../utils/VideoLength';
// import { abbreviateNumber } from 'js-abbreviation-number';

// const TestPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/api/trending`);
//         setVideos(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchVideos();
//   }, [])

//   return (
//     <section className="w-full lg:max-w-[78%] lg:ms-auto flex-1">
//       <div className="sm:px-5 lg:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
//         {videos?.map((video, index) => (
//           <div className="max-w-2xl w-full p-4 hover:scale-[1.02] duration-200" key={index}>
//              <Link to={`/video/${video?.id}`}>
//             <div className="relative">
//               <img
//                 className="rounded-xl"
//                 src={video?.thumbnail?.url}
//                 alt={video.title}
//               />
//                 {video?.duration && <VideoLength time={video?.duration} />}
//             </div>
//             <div className="mt-3 flex items-start space-x-2">
//               <div className="flex-shrink-0 w-9 h-9 rounded-full overflow-hidden bg-white">
//                 <img
//                  src={video?.thumbnail?.url}
//                  alt="avatar"
//                 />
//               </div>
//               <div className="flex flex-col text-md tracking-tighter leading-tight">
//                 <div className="text-white overflow-ellipsis font-semibold max-lines-2">
//                   {video?.title}
//                 </div>
//                 <div className="mt-1 flex items-baseline space-x-1">
//                   <div className="text-gray-400">{video.channel?.name}</div>
//                  {/* {video.authorVerified && (
//                    <div className="w-3 h-3 pt-0.5">
//                    <svg
//                      viewBox="0 0 24 24"
//                      className="text-gray-400"
//                      fill="currentColor"
//                    >
//                      <g>
//                        <path
//                          fillRule="evenodd"
//                          clipRule="evenodd"
//                          d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"
//                        />
//                      </g>
//                    </svg>
//                  </div>
//                  )} */}
//                 </div>
//                 <div className="text-gray-400 flex items-center gap-2">
//                   {abbreviateNumber(video.views, 1)} views <span>•</span>{" "}
//                   {video.uploadedAt}
//                 </div>
//               </div>
//             </div>
//             </Link>
//           </div>
//         ))}
//         {loading && <LoadingSkeleton count={9} />}
//       </div>
//     </section>
//   )
// }

// export default TestPage
