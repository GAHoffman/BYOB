import React from "react";
import RightSidebar from "./Components/RightSidebar";
import LeftSidebar from "./Components/LeftSidebar";
import PostForm from "./Posts/PostForm";
import Story from "./Components/Story";
import Lottie from "lottie-react";
import goldenplantas from "./Assets/goldenplantas.json";
import PostsList from "./Posts/postsList";

const Feed = () => {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <Story />
        <PostForm />
        <PostsList />
      </div>
      <Lottie
        className="fixed top-0 -z-10 w-auto h-auto min-w-full min-h-full max-w-none opacity-25"
        animationData={goldenplantas}
      />
    </>
  );
};

export default Feed;
