import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useDeletePostsMutation } from "../store/postsApi";

function PostsListDetail({ singlePost }) {
  const navigate = useNavigate();
  const [deletePost] = useDeletePostsMutation();

  const user = useSelector((state) => state.auth.user);

  const posterAdmin = singlePost.user.user_id;

  const currentUser = user.user_id;

  const isAdmin = (posterAdmin, currentUser) => {
    if (posterAdmin === currentUser) return true;
    return false;
  };

  return (
    <div className="py-4 bg-white rounded-[17px] shadow-md mt-5">
      <div className="px-4 flex justify-between items-center">
        <div className="flex gap-2">
          <Link to={`/users/${singlePost?.user?.user_id}`}>
            <img
              className="w-[44px] h-[44px] object-cover rounded-full"
              src={singlePost?.user?.avatar_url}
              alt="dp"
            />
          </Link>
          <div>
            <h1 className="text-[16px] font-semibold">
              {singlePost?.user?.username}
            </h1>
            <div className="text-gray-500 flex items-center gap-2">
              <p className="text-xs">
                {new Date(singlePost.post_created).toLocaleDateString("en-US")}{" "}
                {new Date(singlePost.post_created).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <p>·</p>
              <FaGlobeAmericas />
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-[26px] flex gap-4">
          {isAdmin(posterAdmin, currentUser) && (
            <>
              <FiMoreHorizontal
                className="cursor-pointer"
                onClick={() => {
                  navigate(`/posts/${singlePost.posts_id}/update`);
                }}
              />
              <MdOutlineClose
                className="cursor-pointer"
                onClick={() => {
                  deletePost(singlePost.posts_id);
                }}
              />
            </>
          )}
        </div>
      </div>

      <p className="px-4 mt-[15px] text-gray-800 font-normal">
        {singlePost.text}
      </p>

      <Link to={`/posts/${singlePost.posts_id}`}>
        <div className="mt-[15px]">
          {singlePost.postimg_url && (
            <img src={singlePost.postimg_url} alt="post pic" />
          )}
        </div>
      </Link>

      <div className="mx-4 h-[1px] bg-gray-300 mt-[15px]"></div>

      <div className="flex mt-[7px] text-gray-500">
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <AiOutlineLike className="text-[26px]" />
          <p className="font-medium">Like</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <TfiComment className="text-[20px] translate-y-[4px]" />
          <p className="font-medium">Comment</p>
        </div>
      </div>
    </div>
  );
}

export default PostsListDetail;
