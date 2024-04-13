import React, { useState } from "react";
import { BsFillMicFill, BsThreeDotsVertical } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { LiaUserCircle } from "react-icons/lia";
import logo from "../assets/yt-logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import homeSvg from "../assets/images/home.svg";
import homeFillSvg from "../assets/images/homeFill.svg";
import shortsSvg from "../assets/images/shorts.svg";
import shortsFillSvg from "../assets/images/shortsFill.svg";
import subscriptionSvg from "../assets/images/subscription.svg";
import subscriptionFillSvg from "../assets/images/subscriptionFill.svg";
import trendingSvg from "../assets/images/trending.svg";
import trendingFillSvg from "../assets/images/trendingFill.svg";
import SearchInput from "./SearchInput";

const Mobilenav = ({ extended, setExtended }) => {
  const [showSearch, setShowSearch] = useState(false);

  const location = useLocation();

  const mobileMenuItems = [
    {
      icon: location.pathname === "/" ? homeFillSvg : homeSvg,
      text: "Home",
      route: "/",
    },
    {
      icon: location.pathname === "/shorts" ? shortsFillSvg : shortsSvg,
      text: "Shorts",
      route: "/shorts",
    },
    {
      icon:
        location.pathname === "/subscriptions"
          ? subscriptionFillSvg
          : subscriptionSvg,
      text: "Subscriptions",
      route: "/subscriptions",
    },
    {
      icon: location.pathname === "/trending" ? trendingFillSvg : trendingSvg,
      text: "Trending",
      route: "/trending",
    },
  ];

  return (
    <nav className="block md:hidden ">
      <Tooltip id="my-tooltip" className="hidden md:block" />
      <div className="contain flex justify-between items-center max-w-full">
        {showSearch ? (
          <SearchInput setShowSearch={setShowSearch} />
        ) : (
          <>
            <div className="flex gap-2 items-center w-full ">
              <i
                className="hover:bg-[#666666] rounded-full pr-3 cursor-pointer"
                data-tooltip-id="my-tooltip"
                data-tooltip-offset={20}
                data-tooltip-place="bottom"
                onClick={() => setExtended(!extended)}
              >
                <RxHamburgerMenu size={20} className="" />
              </i>
              <Link to="/">
                <img src={logo} className="h-[1.18rem] md:ms-5" alt="logo" />
              </Link>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-end">
                <i
                  className="hover:bg-[#666666] rounded-full p-3 cursor-pointer"
                  onClick={() => setShowSearch(true)}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-offset={20}
                  data-tooltip-content="Search"
                  data-tooltip-place="bottom"
                >
                  <GoSearch size={20} />
                </i>
                <i
                  className="hidden min-[375px]:block hover:bg-[#666666] rounded-full p-3 cursor-pointer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-offset={20}
                  data-tooltip-content="Search with voice"
                  data-tooltip-place="bottom"
                >
                  <BsFillMicFill size={20} />
                </i>
                <i
                  className="hidden min-[375px]:block hover:bg-[#666666] rounded-full p-3 cursor-pointer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-offset={20}
                  data-tooltip-content="Settings"
                  data-tooltip-place="bottom"
                >
                  <BsThreeDotsVertical size={20} />
                </i>

                <i
                  className="min-[375px]:block hover:bg-[#666666] rounded-full pl-3 cursor-pointer"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-offset={20}
                  data-tooltip-content="Account"
                  data-tooltip-place="bottom"
                >
                  <LiaUserCircle size={25} />
                </i>
              </div>
            </div>
          </>
        )}

        {/* = == ==== */}

        <div className="fixed bottom-0 left-0 w-full z-30 bg-[#141414]">
          <ul className="flex justify-around items-center py-2">
            {mobileMenuItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.route} className="flex flex-col items-center">
                  <i>
                    <img src={item.icon} alt="" />
                  </i>
                  <span className="text-[.75rem]">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          {/* <ul className="flex justify-around items-center py-2">
            <li>
              <NavLink to="/" className="flex flex-col items-center">
                <i>
                  {location.pathname === "/" ? (
                    <AiFillHome className="icon" size={20} />
                  ) : (
                    <AiOutlineHome className="icon" size={20} />
                  )}
                </i>
                <span className="text-[.75rem]">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shorts"
                className="flex flex-col items-center"
              >
                <i>
                  {location.pathname === "/shorts" ? (
                    <RiYoutubeFill className="icon" size={20} />
                  ) : (
                    <RiYoutubeLine className="icon" size={20} />
                  )}
                </i>
                <span className="text-[.75rem]">Shorts</span>
              </NavLink>
            </li>
            <li>
              <button>
                <i>
                  <BsPlusCircle className="icon" size={25} />
                </i>
              </button>
            </li>
            <li>
              <NavLink
                to="/trending"
                className=" flex flex-col items-center"
              >
                <i>
                  <BiTrendingUp className="icon" size={20} />
                </i>
                <span className="text-[.75rem]">Trending</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/library"
                className=" flex flex-col items-center"
              >
                <i>
                  {location.pathname === "/library" ? (
                    <MdVideoLibrary className="icon" size={20} />
                  ) : (
                    <MdOutlineVideoLibrary className="icon" size={20} />
                  )}
                </i>
                <span className="text-[.75rem]">Library</span>
              </NavLink>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Mobilenav;
