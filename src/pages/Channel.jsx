import { Suspense, lazy, useContext } from "react";
import { useParams } from "react-router-dom";
import ChannelLayout from "../layouts/ChannelLayout";
import LoadingSpinner from "../components/LoadingSpinner";
import { ytContext } from "../contextAPI";

const ChannelHomeVideos = lazy(() => import("../components/ChannelHomeVideos"));

export default function Channel() {
  const { channelId } = useParams();

  const { loading } = useContext(ytContext);

  return (
    <ChannelLayout>
      <>
        <div className="px-4 gap-2">
          {loading && <LoadingSpinner />}
          <h1 className="text-xl font-semibold pb-5">Latest Videos</h1>

          <Suspense fallback={<LoadingSpinner />}>
            <ChannelHomeVideos channelId={channelId} />
          </Suspense>
        </div>
      </>
    </ChannelLayout>
  );
}
