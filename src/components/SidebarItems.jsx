import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItems = ({ icon: Icon, text, route, index, extended }) => {
  return (
    <li
      className={
        index === 2 || index === 6
          ? "border-b border-[#666666] w-full pb-6"
          : ""
      }
    >
      {index === 3 && (
        <p
          className={` transition-all duration-500 ${
            !extended ? "opacity-0  p-0" : "opacity-100 font-medium p-3"
          }`}
        >
          Explore
        </p>
      )}
      <NavLink
        to={route}
        className="flex items-center gap-4 navlink p-[0.6rem]"
      >
        <i className="text-[#ff2900]">
          <Icon size={26} />
        </i>
        <span className="font-medium text-[1.02rem]">{text}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItems;
