import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelHeader from "../components/ChannelHeader";
import Layout from "./Layout";
import { getChannel, getYoutubeChannel } from "../utils/fetchFromAPI";
import { ytContext } from "../contextAPI";
import LoadingSpinner from "../components/LoadingSpinner";

const ChannelLayout = ({ children }) => {
  const { channelId } = useParams();
  const [channelInfo, setChannelInfo] = useState({});
  const { loading, setLoading } = useContext(ytContext);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        setLoading(true);
        const response = await getChannel(channelId);
        setChannelInfo(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchChannel();
  }, [channelId]);
  // useEffect(() => {
  //   const fetchChannel = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await getChannel(channelId);
  //       setChannelInfo(response);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchChannel();
  // }, [channelId]);

  return (
    <Layout>
      <div className="w-full grid gap-4">
        <ChannelHeader channelId={channelId} channelInfo={channelInfo} />
        {children}
      </div>
      {loading && <LoadingSpinner />}
    </Layout>
  );
};

export default ChannelLayout;
