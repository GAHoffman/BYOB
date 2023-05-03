import React from "react";
import { BsChevronUp } from "react-icons/bs";
import LeftSidebarLink from "./LeftSidebarLink";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <Link to={`/users/${user.user_id}`}>
          <LeftSidebarLink image={user.avatar_url} text={user.username} />
        </Link>
        <LeftSidebarLink image="/gardener.png" text="Friends" />
        <Link to={`/users/${user.user_id}/produce/new`}>
          <LeftSidebarLink image="/seeds.png" text="Grow a Produce" />
        </Link>
        <Link to="/posts">
          <LeftSidebarLink image="/market.png" text="Make a Post" />
        </Link>
        <LeftSidebarLink image="/bookmark.png" text="Saved" />
        <LeftSidebarLink image="/vineyard.png" text="Pages" />
        <LeftSidebarLink image="/calendar_1.png" text="Events" />
        <LeftSidebarLink image="/clock.png" text="Most Recent" />

        <Link to="/posts">
          <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
            <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
              <BsChevronUp />
            </div>
            <h1 className="text-[16px] font-medium">Top of Page</h1>
          </div>
        </Link>

        <p className="text-[14px] text-gray-500 mt-2">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · BYOB ©
          2023
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
