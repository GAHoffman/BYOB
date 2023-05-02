import React from "react";

const FriendRequest = () => {
  return (
    <div>
      <div className="flex gap-2 w-[100%]">
        <img
          className="h-[50px] w-[50px] rounded-full object-cover"
          src="/jackblackcircle.png"
          alt="jackblackcircle"
        />
        <div>
          <h1 className="font-semibold">Jack Black</h1>
          <p className="text-gray-500 text-[14px]">7 mutual friends</p>
        </div>
        <p className="ml-auto text-primary text-[14px]">1 d</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button className="bg-blue-500 text-white py-2 px-5 rounded-lg">
          Confirm
        </button>
        <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
