import React from "react";
import { useState, useEffect } from "react";
import { useCreatePostsMutation } from "../store/postsApi";
import { useGetAllProduceQuery } from "../store/produceApi";
import { useSelector } from "react-redux";
import { IoVideocamSharp } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";

export default function PostForm() {
  const [textState, setTextState] = useState("");
  const [postImgUrl, setPostImgUrl] = useState("");
  const [produce, setProduce] = useState(0);
  const user = useSelector((state) => state.auth.user);

  const handleTextStateChange = (event) => {
    setTextState(event.target.value);
  };
  const handlePostImgUrlChange = (event) => {
    setPostImgUrl(event.target.value);
  };
  const handleProduceChange = (event) => {
    setProduce(event.target.value);
  };

  const {
    data: produceData,
    isError,
    isLoading,
  } = useGetAllProduceQuery(user.user_id, { skip: !user.user_id });

  const [createPost, result] = useCreatePostsMutation();

  const handleReset = () => {
    setTextState("");
    setPostImgUrl("");
    setProduce("");
  };

  useEffect(() => {
    if (result.isSuccess) {
      handleReset();
    }
  }, [result.isSuccess]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    createPost({
      text: textState,
      postimg_url: postImgUrl,
      produce_id: produce,
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div
        className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p className="font-bold">Something went wrong with loading data...</p>
      </div>
    );
  }
  return (
    <div className="px-4 py-6 bg-white rounded-[17px] shadow-md mt-5">
      <form onSubmit={handleSubmit} id="create-post-form">
        <div className="flex gap-4 pb-4">
          <img
            className="w-[44px] h-[44px] object-cover rounded-full"
            src={user.avatar_url}
            alt="userImg"
          />
          <select
            value={produce.produce_id}
            onChange={handleProduceChange}
            id="produce"
            name="produce"
            className="form-select w-[100%] border-b border-gray-300"
          >
            <option value="">Choose from your produce</option>
            {produceData &&
              produceData.map((singleProduce) => {
                return (
                  <option
                    key={singleProduce.produce_id}
                    value={singleProduce.produce_id}
                  >
                    {singleProduce.name}
                  </option>
                );
              })}
            ;
          </select>
        </div>

        <div className="pb-4">
          <input
            value={textState}
            onChange={handleTextStateChange}
            placeholder="Share Your Updates Here!"
            required
            type="text"
            name="text"
            id="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="border-b border-gray-300 pb-4">
          <input
            value={postImgUrl}
            onChange={handlePostImgUrlChange}
            placeholder="Drop an image here!"
            required
            type="text"
            name="postImgUrl"
            id="postImgUrl"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between px-4 pt-6">
          <div className="flex items-center gap-2 cursor-pointer">
            <IoVideocamSharp className="text-[#E42645] text-[30px]" />
            <p className="text-gray-500 font-medium">Live Video</p>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <MdOutlinePhotoLibrary className="text-[#41B35D] text-[30px]" />
            <p className="text-gray-500 font-medium">Photo/video</p>
          </div>

          <div className="hidden sm:flex items-center gap-2 cursor-pointer">
            <GoSmiley className="text-[#ECBF55] text-[30px]" />
            <p className="text-gray-500 font-medium">Feeling/activity</p>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white w-[100%] py-2 px-5 rounded-lg mt-[30px] disabled:bg-gray-300 disabled:text-gray-500"
          disabled={!textState.trim() && !postImgUrl.trim()}
        >
          Create this post
        </button>
      </form>
    </div>
  );
}
