import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { RiYoutubeLine, RiYoutubeFill } from "react-icons/ri";

import { BsTrophy } from "react-icons/bs";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { LiaYoutube } from "react-icons/lia";
import { LuHelpCircle, LuMusic2 } from "react-icons/lu";
import {
  MdOutlineFeedback,
  MdOutlineSubscriptions,
  MdReportGmailerrorred,
 
} from "react-icons/md";


export const sidebarItems = [
  { icon: AiOutlineHome, text: "Home", route: "/" },
  { icon: LiaYoutube, text: "Shorts", route: "/shorts" },
  {
    icon: MdOutlineSubscriptions,
    text: "Subscription",
    route: "/subscriptions",
  },
  { icon: HiOutlineTrendingUp, text: "Trending", route: "/trending" },
  { icon: LuMusic2, text: "Music", route: "/music" },
  { icon: IoGameControllerOutline, text: "Gaming", route: "/gaming" },
  { icon: BsTrophy, text: "Sports", route: "/sports" },
  { icon: AiOutlineSetting, text: "Settings", route: "/settings" },
  { icon: MdReportGmailerrorred, text: "Report", route: "/report" },
  { icon: LuHelpCircle, text: "Help", route: "/help" },
  { icon: MdOutlineFeedback, text: "Feedback", route: "/feedback" },
];



export const trendingTabs = [
  { text: "Now", route: "/trending" },
  { text: "Music", route: "/music" },
  { text: "Gaming", route: "/gaming" },
  { text: "Films", route: "/films" },
];


