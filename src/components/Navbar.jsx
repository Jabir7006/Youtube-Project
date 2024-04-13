import React, { useState } from "react";
import logo from "../assets/yt-logo.png";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillMicFill, BsThreeDotsVertical } from "react-icons/bs";
import { BiLeftArrowAlt } from "react-icons/bi";
import { LiaUserCircle, LiaYoutube } from "react-icons/lia";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdReportGmailerrorred,
  MdOutlineFeedback,
} from "react-icons/md";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { LuMusic2, LuHelpCircle } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import SearchInput from "./SearchInput";

const Navbar = ({ extended, setExtended }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <nav className="">
      <Tooltip id="my-tooltip" />
      <div className="contain flex justify-between items-center">
        <>
          <div className="flex gap-2 items-center w-full ">
            <i
              className="hover:bg-[#666666] rounded-full p-3 cursor-pointer"
              data-tooltip-id="my-tooltip"
              data-tooltip-offset={20}
              data-tooltip-content="menu"
              data-tooltip-place="bottom"
              onClick={() => setExtended(!extended)}
            >
              <RxHamburgerMenu size={20} className="" />
            </i>
            <Link to="/">
              <img src={logo} className="h-[1.18rem] md:ms-5" alt="logo" />
            </Link>
          </div>

          <SearchInput showSearch={showSearch} setShowSearch={setShowSearch} />

          <i
            className=" hover:bg-[#666666] rounded-full p-3 cursor-pointer"
            data-tooltip-id="my-tooltip"
            data-tooltip-offset={20}
            data-tooltip-content="Search with voice"
            data-tooltip-place="bottom"
          >
            <BsFillMicFill size={20} />
          </i>
          <div className="w-full">
            <div className="flex items-center justify-end">
              <i
                className="hover:bg-[#666666] rounded-full p-3 cursor-pointer block md:hidden"
                onClick={() => setShowSearch(true)}
                data-tooltip-id="my-tooltip"
                data-tooltip-offset={20}
                data-tooltip-content="Search"
                data-tooltip-place="bottom"
              >
                <GoSearch size={20} />
              </i>

              <i
                className="hidden min-[425px]:block hover:bg-[#666666] rounded-full p-3 cursor-pointer"
                data-tooltip-id="my-tooltip"
                data-tooltip-offset={20}
                data-tooltip-content="Settings"
                data-tooltip-place="bottom"
              >
                <BsThreeDotsVertical size={20} />
              </i>

              <div className="flex gap-2 border border-[#303030] py-2 px-3 rounded-full hover:bg-[#368dd8] hover:bg-opacity-30 text-[#368dd8] cursor-pointer">
                <i>
                  <LiaUserCircle size={23} />
                </i>
                <span className="text-[.9rem] flex gap-1">
                  Sign <span>in</span>
                </span>
              </div>
            </div>
          </div>
        </>
      </div>
    </nav>
  );
};

export default Navbar;
