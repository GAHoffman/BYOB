import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useDeletePostsMutation } from "../store/postsApi";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  CurrencyDollarIcon,
  CalendarDaysIcon,
  ScaleIcon,
  HashtagIcon,
  CheckBadgeIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";

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

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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

      <button onClick={openModal}>
        <div className="mt-[15px]">
          {singlePost.postimg_url && (
            <img src={singlePost.postimg_url} alt="post pic" />
          )}
        </div>
      </button>

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
      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div className="bg-byob-cyan px-4 py-3 sm:px-6 sm:flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#203330]">
                  {singlePost.text}
                </h2>
                <button
                  onClick={closeModal}
                  type="button"
                  className="inline-flex justify-center rounded-md bg-byob-cyan focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <svg
                    className="h-6 w-6 text-[#203330]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <Card className="w-full shadow-lg">
                <CardHeader floated={false} color="blue-gray">
                  <img src={singlePost.postimg_url} alt="ui/ux review check" />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                </CardHeader>
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {singlePost ? singlePost.produce.name : ""}
                    </Typography>
                  </div>
                  <Typography color="gray">
                    <span>
                      {singlePost ? singlePost.produce.description : ""}
                    </span>
                  </Typography>
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-1.5">
                      <CurrencyDollarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <Typography color="blue-gray" className="font-medium">
                        Price: {singlePost ? singlePost.produce.price : ""}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CalendarDaysIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <Typography color="blue-gray" className="font-medium">
                        Expiration Date:{" "}
                        {singlePost ? (
                          <>
                            {new Date(
                              singlePost.produce.exp_date
                            ).toLocaleDateString("en-US")}
                          </>
                        ) : (
                          ""
                        )}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PhotoIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <Typography color="blue-gray" className="font-medium">
                        Decorative:{" "}
                        {singlePost
                          ? `${singlePost?.produce?.is_decorative}`
                          : "none"}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckBadgeIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <Typography color="blue-gray" className="font-medium">
                        Available:{" "}
                        {singlePost
                          ? `${singlePost?.produce?.is_available}`
                          : "none"}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <HashtagIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <Typography color="blue-gray" className="font-medium">
                        Quantity:{" "}
                        {singlePost ? singlePost.produce.quantity : ""}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ScaleIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      <Typography color="blue-gray" className="font-medium">
                        Weight: {singlePost ? singlePost.produce.weight : ""}
                      </Typography>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="pt-3 flex justify-between">
                  <Button
                    size="lg"
                    fullWidth={true}
                    className="px-2 py-2 rounded-md text-md font-medium"
                  >
                    <Link to="/deliveries">Request Delivery</Link>
                  </Button>
                  <Button
                    size="lg"
                    fullWidth={true}
                    className="px-2 py-2 rounded-md text-md font-medium ml-4"
                  >
                    <Link to={`/posts/${singlePost.posts_id}/update`}>
                      Update Post
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostsListDetail;
