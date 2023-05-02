import React from "react";
import RightSidebar from "./Components/RightSidebar";
import LeftSidebar from "./Components/LeftSidebar";
// import PostForm from "./Posts/PostForm";

const Feed = () => {
  return (
    <>
      <LeftSidebar />
      <RightSidebar />
      {/* <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
        <Story />
        <WhatsOnYourMind />
        {posts.map((post) => {
          return <Post key={post.id} id={post.id} data={post.data()} />;
        })}
        </div> */}
    </>
  );
};

export default Feed;
