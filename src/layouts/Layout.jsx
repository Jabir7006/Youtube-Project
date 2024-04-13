import React, { useState } from "react";
import Mobilenav from "../components/Mobilenav";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  const [extended, setExtended] = useState(false);

  const toggleSidebar = () => {
    setExtended(!extended);
  };

  return (
    <div className="relative flex flex-col h-screen w-full">
      {/* Header */}
      <div className="z-50 hidden md:block">
        <Navbar
          extended={extended}
          setExtended={setExtended}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div className="md:hidden z-50">
        <Mobilenav extended={extended} setExtended={setExtended} />
      </div>

      {/* Sidebar Overlay */}
      {extended && (
        <div
          className="max-md:fixed max-md:inset-0 max-md:bg-black max-md:opacity-50 max-md:z-40"
          onClick={() => setExtended(false)}
        />
      )}

      {/* Main content with sidebar */}
      <div
        className="flex flex-1"
        style={{
          height: "auto", // Set height to auto
          maxHeight: "calc(100vh - 64px)", // Adjust max height to accommodate header
          overflowY: "auto", // Enable vertical scroll if content exceeds max height
        }}
      >
        {/* Sidebar */}
        <div
          className={`transition-width max-md:transition-transform duration-500 ease-in-out max-md:z-50 ${
            extended
              ? "md:w-64 max-md:translate-x-0"
              : "md:w-20 max-md:-translate-x-full"
          }`}
        >
          <Sidebar
            extended={extended}
            setExtended={setExtended}
            toggleSidebar={toggleSidebar}
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out">
          <div className="overflow-y-auto bg-[#131314]">
            <div className="">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
