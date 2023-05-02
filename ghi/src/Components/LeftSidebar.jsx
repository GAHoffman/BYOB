import React from "react";
import { BsChevronDown } from "react-icons/bs";
import LeftSidebarLink from "./LeftSidebarLink";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <LeftSidebarLink image={user.avatar_url} text={user.username} />
        <LeftSidebarLink image="/gardener.png" text="Friends" />
        <LeftSidebarLink image="/seeds.png" text="Groups" />
        <LeftSidebarLink image="/market.png" text="Marketplace" />
        <LeftSidebarLink image="/bookmark.png" text="Saved" />
        <LeftSidebarLink image="/vineyard.png" text="Pages" />
        <LeftSidebarLink image="/calendar_1.png" text="Events" />
        <LeftSidebarLink image="/clock.png" text="Most Recent" />

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · BYOB ©
          2023
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
