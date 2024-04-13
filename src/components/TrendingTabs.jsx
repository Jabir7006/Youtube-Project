import { Divider, Tabs } from "keep-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { trendingTabs } from "../constant";

const TrendingTabs = () => {
  return (
    <>
      <div className="flex items-center px-5 py-4 gap-3 ">
        <img
          src="https://www.youtube.com/img/trending/avatar/trending.png"
          className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
          alt=""
        />

        <h2 className="text-2xl lg:text-4xl font-bold">Trending</h2>
      </div>
  

      <div className="font-medium text-center text-gray-400 border-b border-gray-500 ">
        <ul className="flex flex-wrap -mb-px bsl">
          {trendingTabs.map((tab) => (
            <li className="" key={tab.text}>
              <NavLink
                to={tab.route}
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-200 hover:border-gray-300"
              >
                {tab.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TrendingTabs;
