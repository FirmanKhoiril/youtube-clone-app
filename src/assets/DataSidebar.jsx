import { AiOutlineHome, AiOutlineSetting, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPlay, BsExclamationOctagon } from "react-icons/bs";
import { SiYoutubegaming } from "react-icons/si";
import { GiSmallFire, GiTrophyCup } from "react-icons/gi";

import { HiOutlineMusicalNote, HiOutlineNewspaper } from "react-icons/hi2";
import { MdOutlineSubscriptions, MdOutlineMovie, MdOutlineEmojiFlags } from "react-icons/md";

export const first = [
  { icon: <AiOutlineHome />, name: "home" },
  { icon: <BsPlay />, name: "short" },
  { icon: <MdOutlineSubscriptions />, name: "subcriptions" },
];

export const second = [
  { icon: <GiSmallFire />, name: "trending" },
  { icon: <HiOutlineMusicalNote />, name: "music" },
  { icon: <MdOutlineMovie />, name: "movies" },
  { icon: <SiYoutubegaming />, name: "gaming" },
  { icon: <HiOutlineNewspaper />, name: "news" },
  { icon: <GiTrophyCup />, name: "sports" },
];

export const three = [
  { icon: <AiOutlineSetting />, name: "settings" },
  { icon: <MdOutlineEmojiFlags />, name: "report history" },
  { icon: <AiOutlineQuestionCircle />, name: "help" },
  { icon: <BsExclamationOctagon />, name: "send feedback" },
];
