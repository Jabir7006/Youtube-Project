import { useContext } from "react";
import SearchResultVideoCard from "../components/SearchResultVideoCard";
import { ytContext } from "../contextAPI";
import ListLoadinSkeleton from "../components/ListLoadinSkeleton";
import Layout from "../layouts/Layout";

function SearchResult() {
  const { searchResults, loading } = useContext(ytContext);

  return (
    <Layout>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <div className="grow lg:max-w-[95%] h-full overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 p-5">
            {!loading &&
              searchResults?.map((video, i) => {
                return <SearchResultVideoCard key={i} video={video} />;
              })}
            {loading &&
              Array.from({ length: 10 }, (_, index) => (
                <ListLoadinSkeleton key={index} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SearchResult;
