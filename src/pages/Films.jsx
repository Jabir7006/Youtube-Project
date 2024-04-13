import React, { useContext, useEffect, useState } from "react";
import TrendingLayout from "../layouts/TrendingLayout";

import { ytContext } from "../contextAPI";
import Layout from "../layouts/Layout";
import { getFilmVideos } from "../utils/fetchFromAPI";
import ListLoadinSkeleton from "./../components/ListLoadinSkeleton";
import VideoItem from "./../components/TrendingVideoItem";

function Films() {
  const [filmVideos, setFilmVideos] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  useEffect(() => {
    const fetchFilmVideos = async () => {
      try {
        setLoading(true);
        const response = await getFilmVideos();

        setFilmVideos(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchFilmVideos();
  }, []);

  return (
    <Layout>
      <TrendingLayout className="flex flex-row h-[calc(100%-56px)]">
        <div className="grow h-full overflow-y-auto">
          <div className="grid grid-cols-1">
            {filmVideos?.map((video, i) => (
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
export default Films;
