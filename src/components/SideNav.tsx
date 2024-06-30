import React from "react";
import {
  AiOutlineHome,
  AiOutlineTags,
  AiOutlineContacts,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="h-screen w-[18%] p-2 ">
      <div className="">
        <ul>
          <li className="p-2 bg-purple-300  hover:bg-purple-100 cursor-pointer flex items-center gap-2 rounded-md mt-2">
            <AiOutlineHome />
            <span>Home</span>
          </li>
          <li className="p-2 hover:bg-purple-100 cursor-pointer flex items-center gap-2 rounded-md mt-2">
            <AiOutlineTags />
            <span>Tags</span>
          </li>
          <li className="p-2 hover:bg-purple-100 cursor-pointer flex items-center gap-2 rounded-md mt-2">
            <AiOutlineInfoCircle />
            <span>About</span>
          </li>
          <li className="p-2 hover:bg-purple-100 cursor-pointer flex items-center gap-2 rounded-md mt-2">
            <AiOutlineContacts />
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
