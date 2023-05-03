import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../store/usersApi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PostsDetail from "../Posts/PostsDetail";
import PostsCard from "../Posts/PostsCard";
import ProduceDetail from "../Produce/ProduceDetail";
import { useGetAllPostsQuery } from "../store/postsApi";
import { useGetAllProduceQuery } from "../store/produceApi";

export default function ProfilePage() {
  const { user_id } = useParams();
  const { data: userData, isError, isLoading } = useGetUsersQuery(user_id);
  const [produceList, setProduceList] = useState([]);

  const { data: produceData } = useGetAllProduceQuery(user_id, {
    skip: !user_id,
  });
  useEffect(() => {
    // Use the useEffect hook to set the produceList state after the API call
    if (produceData) {
      setProduceList(produceData);
    }
  }, [produceData]);

  const [openProduce, setOpenProduce] = useState(-1);

  const handleOpenProduce = (index) => {
    if (index === openProduce) {
      setOpenProduce(-1);
    } else {
      setOpenProduce(index);
    }
  };

  const { data: postsData } = useGetAllPostsQuery();

  const [open, setOpen] = useState(-1);

  const handleOpen = (index) => {
    if (index === open) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };

  const handleClose = (index) => {
    if (index === openProduce) {
      setOpenProduce(-1);
    } else if (index === open) {
      setOpen(-1);
    }
  };

  const userId = user_id;

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
    <div>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={userData.avatar_url}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          22
                        </span>
                        <span className="text-sm text-gray-500">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          10
                        </span>
                        <span className="text-sm text-gray-500">Produce</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          14
                        </span>
                        <span className="text-sm text-gray-500">Posts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                    {userData.first_name} {userData.last_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    {userData.city}, {userData.state}
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-user mr-2 text-lg text-gray-500"></i>
                    {userData.username}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        {userData.first_name} {userData.last_name} is a
                        gardening enthusiast and community advocate who
                        cultivates plants and connections. They grew up in a
                        small town and discovered their love for gardening early
                        on. They create sustainable gardens that provide
                        nourishment and a sense of belonging to their neighbors.
                        {" " + userData.first_name} believes in gardening's
                        power to bring people together and works tirelessly to
                        share their knowledge and passion with others.
                      </p>
                      <a
                        href=""
                        className="font-normal text-green-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col justify-center items-center shadow-sm py-12">
          <div className="justify-center items-center bg-white rounded-lg min-w-[1240px] max-w-[1240px] mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
              Your Produce
            </h2>
            <hr className="border-t-2 border-gray-500" />
            <div>
              {produceList.length > 0 &&
                produceList.map((singleProduce, index) => (
                  <Accordion
                    key={index}
                    open={openProduce === index}
                    className="py-2"
                  >
                    <AccordionHeader
                      onClick={() => handleOpenProduce(index)}
                      className="px-4 py-2 flex justify-between items-center cursor-pointer"
                    >
                      <span className="text-gray-800">
                        {singleProduce.name}
                      </span>
                    </AccordionHeader>
                    <AccordionBody className="px-4 py-2">
                      <ProduceDetail singleProduce={singleProduce} />
                    </AccordionBody>
                  </Accordion>
                ))}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-12">
              Your Posts
            </h2>
            <hr className="border-t-2 border-gray-500 mb-6" />
            <div className="grid grid-cols-4 gap-4">
              {postsData &&
                postsData
                  .filter((singlePost) => singlePost.user.user_id == userId)
                  .map((singlePost, index) => (
                    <div key={index}>
                      <PostsCard singlePost={singlePost} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
