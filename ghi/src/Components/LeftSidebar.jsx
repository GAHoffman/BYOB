import React from "react";
import { BsChevronUp } from "react-icons/bs";
import LeftSidebarLink from "./LeftSidebarLink";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const user = useSelector((state) => state.auth.user);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        <div onClick={scrollToTop}>
          <LeftSidebarLink image="/market.png" text="Make a Post" />
        </div>

        <LeftSidebarLink image="/bookmark.png" text="Saved" />
        <LeftSidebarLink image="/vineyard.png" text="Pages" />
        <LeftSidebarLink image="/calendar_1.png" text="Events" />
        <LeftSidebarLink image="/clock.png" text="Most Recent" />

        <div
          className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300"
          onClick={scrollToTop}
        >
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronUp />
          </div>
          <h1 className="text-[16px] font-medium">Top of Page</h1>
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
