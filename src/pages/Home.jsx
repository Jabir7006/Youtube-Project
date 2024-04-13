import React, { useContext, useEffect, useRef, useState } from "react";
import FeedVideos from "../components/FeedVideos";
import { ytContext } from "../contextAPI";
import Layout from "../layouts/Layout";
import { getFeedVideos } from "../utils/fetchFromAPI";
import ErrorPage from "./ErrorPage";

function Home() {
  const [feedVideos, setFeedVideos] = useState([]);

  const [error, setError] = useState(null);
  const { loading, setLoading } = useContext(ytContext);
  const [page, setPage] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        setLoading(true);
        const response = await getFeedVideos(page);

        if (response.length === 0) {
          setReachedEnd(true);
          return;
        }

        setFeedVideos((prevVideos) => [...prevVideos, ...response]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && !reachedEnd) {
          fetchTrendingVideos();
        }
      },
      { threshold: 1 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [page, loading, reachedEnd]);

  return (
    <Layout>
      <section className="w-full sm:p-3">
        {!error && <FeedVideos feedVideos={feedVideos} />}

        {error && <ErrorPage error={error} />}
        <div ref={loader} />
      </section>
    </Layout>
  );
}

export default Home;
