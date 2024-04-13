import React from "react";
import TrendingTabs from "../components/TrendingTabs";

const TrendingLayout = ({ children }) => {
  return (
    <div className="">
      <TrendingTabs />
      {children}
    </div>
  );
};

export default TrendingLayout;
