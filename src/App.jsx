import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

import { AppContext } from "./contextAPI";

import Home from "./pages/Home";

const SearchResult = React.lazy(() => import("./pages/SearchResult"));
const Trending = React.lazy(() => import("./pages/Trending"));
const VideoPage = React.lazy(() => import("./pages/VideoPage"));
const TestPage = React.lazy(() => import("./pages/TestPage"));
const Shorts = React.lazy(() => import("./pages/Shorts"));
const Music = React.lazy(() => import("./pages/Music"));
const Gaming = React.lazy(() => import("./pages/Gaming"));
const Films = React.lazy(() => import("./pages/Films"));
const Sports = React.lazy(() => import("./pages/Sports"));
const Channel = React.lazy(() => import("./pages/Channel"));
const ChannelVideos = React.lazy(() => import("./pages/ChannelVideos"));
const ChannelShorts = React.lazy(() => import("./pages/ChannelShorts"));
const ChannelPosts = React.lazy(() => import("./pages/CommunityPosts"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/search/:searchTerm"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <SearchResult />
              </Suspense>
            }
          />

          <Route
            path="/video/:videoId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <VideoPage />
              </Suspense>
            }
          />
          <Route
            path="/trending"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Trending />
              </Suspense>
            }
          />
          <Route
            path="/shorts"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Shorts />
              </Suspense>
            }
          />
          <Route
            path="/music"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Music />
              </Suspense>
            }
          />
          <Route
            path="/gaming"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Gaming />
              </Suspense>
            }
          />
          <Route
            path="/films"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Films />
              </Suspense>
            }
          />
          <Route
            path="/sports"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Sports />
              </Suspense>
            }
          />
          <Route
            path="/channel/:channelId"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Channel />
              </Suspense>
            }
          />
          <Route
            path="/channel/:channelId/videos"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ChannelVideos />
              </Suspense>
            }
          />
          <Route
            path="/channel/:channelId/shorts"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ChannelShorts />
              </Suspense>
            }
          />
          <Route
            path="/channel/:channelId/posts"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ChannelPosts />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
