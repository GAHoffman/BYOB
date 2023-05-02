import React from "react";
import { useSelector } from "react-redux";
import { HiBookOpen } from "react-icons/hi";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from "./SingleStory";

const Story = () => {
  const singleStoryData = [
    {
      title: "Jack Black",
      img: "/jackblackcircle.png",
      postImg:
        "bg-[url('https://images.pexels.com/photos/2847908/pexels-photo-2847908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
      hrefLink: "https://www.youtube.com/watch?v=pLQuIuokP6Q",
    },
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg:
        "bg-[url('https://images.pexels.com/photos/4039451/pexels-photo-4039451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
      hrefLink: "https://www.youtube.com/watch?v=tKbHqxI7VFA",
    },
    {
      title: "Jack Black",
      img: "/jackblackcircle.png",
      postImg:
        "bg-[url('https://images.pexels.com/photos/95215/pexels-photo-95215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
      hrefLink: "https://youtu.be/dq8ojt3Frj0",
    },
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg:
        "bg-[url('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
      hrefLink: "https://www.youtube.com/watch?v=B0DrWAUsNSc",
    },
    {
      title: "Jack Black",
      img: "/jackblackcircle.png",
      postImg:
        "bg-[url('https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=1600')]",
      hrefLink: "https://www.youtube.com/watch?v=0fcpi1Yje1A",
    },
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg:
        "bg-[url('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]",
      hrefLink: "https://youtu.be/bRWac1OpxPY",
    },
  ];

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="grid grid-cols-2 bg-white border-b border-gray-300">
        <div className="relative">
          <div className="mx-auto w-fit flex gap-2 items-center text-primary py-2">
            <HiBookOpen className="text-[30px]" />
            <p className="font-bold">Stories</p>
          </div>
          <div className="bg-primary h-[3px]"></div>
        </div>

        <div>
          <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2">
            <TfiVideoClapper className="text-[26px]" />
            <p className="font-bold">Reels</p>
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll scrollbar-hide">
        <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
          <img
            className="w-[112px] h-[151px] rounded-t-[15px] object-cover"
            src={user.avatar_url}
            alt="user image"
          />
          <div>
            <div className="bg-blue-300 w-[35px] h-[35px] rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white cursor-pointer">
              <AiOutlinePlus />
            </div>
            <p className="text-center mt-2 font-medium">Create Story</p>
          </div>
        </div>
        {singleStoryData.map(({ title, img, postImg, hrefLink }, index) => {
          return (
            <SingleStory
              key={index}
              title={title}
              img={img}
              postImg={postImg}
              hrefLink={hrefLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Story;
