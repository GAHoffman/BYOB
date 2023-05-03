import React from "react";
import RightSidebar from "./Components/RightSidebar";
import LeftSidebar from "./Components/LeftSidebar";
import PostForm from "./Posts/PostForm";
import Story from "./Components/Story";
import Lottie from "lottie-react";
import plantsgardening from "./Assets/plantsgardening.json";

const Feed = () => {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <Story />
        <PostForm />

        {/* {posts.map((post) => {
          return <Post key={post.id} id={post.id} data={post.data()} />;
        })} */}
      </div>
      <Lottie
        className="fixed top-10 -z-10 w-auto min-w-full min-h-full max-w-none opacity-25"
        animationData={plantsgardening}
      />
    </>
  );
};

export default Feed;
