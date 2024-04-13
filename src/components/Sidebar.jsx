import React from "react";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { sidebarItems } from "../constant";
import SidebarItems from "./SidebarItems";

const SideBar = ({ extended, setExtended, toggleSidebar }) => {

  

  return (
    <nav
      className={`nav max-md:fixed max-md:left-0 max-md:top-0 max-md:w-64 max-md:bg-black max-md:text-white max-md:transition-transform max-md:transform sidebar ${
        extended ? "max-md:translate-x-0" : "max-md:-translate-x-full"
      } z-50`}
      style={{
        height: "auto", // Set height to auto
        maxHeight: "calc(100vh - 64px)", // Adjust max height to accommodate header
        overflowY: "auto", // Enable vertical scroll if content exceeds max height
      }}
    >
      <Tooltip id="my-tooltip" />
      <div className="contain">
        <div className="overflow-y-auto overflow-x-hidden ">
          <ul className="flex flex-col gap-1 mt-4 group">
            {sidebarItems.map((item, index) => (
              <SidebarItems
                key={index}
                {...item}
                index={index}
                extended={extended}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
