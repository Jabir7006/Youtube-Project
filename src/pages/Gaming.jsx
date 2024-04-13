import React, { useContext, useEffect, useState } from "react";
import ListLoadinSkeleton from "../components/ListLoadinSkeleton";
import VideoItem from "../components/TrendingVideoItem";
import { ytContext } from "../contextAPI";
import Layout from "../layouts/Layout";
import TrendingLayout from "../layouts/TrendingLayout";
import { getGamingideos } from "../utils/fetchFromAPI";

function Gaming() {
  const [gamingVideos, setGamingVideos] = useState([]);
  const { loading, setLoading } = useContext(ytContext);

  useEffect(() => {
    const fetchGamingVideos = async () => {
      try {
        setLoading(true);
        const response = await getGamingideos();

        setGamingVideos(response);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchGamingVideos();
  }, []);

  return (
    <Layout>
      <TrendingLayout className="flex flex-row h-[calc(100%-56px)]">
        <div className="grow h-full overflow-y-auto">
          <div className="grid grid-cols-1">
            {gamingVideos?.map((video, i) => (
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
export default Gaming;
