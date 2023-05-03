import React from "react";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import FriendRequest from "./FriendRequest";
import BlogLink from "./BlogLink";

const RightSidebar = () => {
  return (
    <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">
            Friend requests
          </h1>
          <p className="text-primary hover:text-blue-600 cursor-pointer">
            See All
          </p>
        </div>

        <div className="mt-4">
          <FriendRequest />

          <div className="h-[2px] bg-gray-300 my-5"></div>

          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">Blogs</h1>
            <div className="flex gap-4">
              <BiSearch />
              <BsThreeDots />
            </div>
          </div>

          <BlogLink />

          <div className="bg-gray-300 h-[44px] w-[44px] grid place-items-center text-[26px] rounded-full fixed right-0 bottom-0 mr-8 mb-8">
            <BiEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
