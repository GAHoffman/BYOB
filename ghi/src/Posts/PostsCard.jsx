import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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

function PostsCard({ singlePost }) {
  const postDate = new Date(singlePost.post_created);
  const today = new Date();
  const timeDiff = Math.abs(today.getTime() - postDate.getTime());
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const dateString = dayDiff === 1 ? "1d ago" : `${dayDiff}d ago`;

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString();
    return `${month}/${day}/${year}`;
  }

  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (singlePost?.produce?.produce_id !== null) {
    return (
      <>
        <section className="w-64 mx-auto bg-byob-cyan rounded-t-2xl px-8 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{dateString}</span>
            <span className="text-green-600 ml-2">
              <button onClick={openModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </section>
        <div className="w-64 mx-auto bg-white rounded-b-2xl px-8 py-4 shadow-lg border-slate-600">
          <p className="text-green-600 font-semibold">
            {singlePost ? singlePost.produce.name : ""}
          </p>
          <h2 className="text-black font-bold text-xl tracking-wide mt-2.5 mb-2">
            {singlePost ? singlePost.text : ""}
          </h2>
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
                      <img
                        src={singlePost.postimg_url}
                        alt="ui/ux review check"
                      />
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
                            {singlePost
                              ? formatDate(singlePost.produce.exp_date)
                              : ""}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <PhotoIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                          <Typography color="blue-gray" className="font-medium">
                            Decorative:{" "}
                            {singlePost
                              ? singlePost.produce.is_decorative.toString()
                              : "none"}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckBadgeIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                          <Typography color="blue-gray" className="font-medium">
                            Available:{" "}
                            {singlePost
                              ? singlePost.produce.is_available.toString()
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
                            Weight:{" "}
                            {singlePost ? singlePost.produce.weight : ""}
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
      </>
    );
  } else {
    return (
      <>
        <section className="w-64 mx-auto bg-byob-cyan rounded-t-2xl px-8 py-4 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{dateString}</span>
            <span className="text-green-600 ml-2">
              <button onClick={openModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </section>
        <div className="w-64 mx-auto bg-white rounded-b-2xl px-8 py-4 shadow-lg border-slate-600">
          <h2 className="text-black font-bold text-xl tracking-wide mt-2.5 mb-2">
            {singlePost ? singlePost.text : ""}
          </h2>
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
                      <img
                        src={singlePost.postimg_url}
                        alt="ui/ux review check"
                      />
                      <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody></CardBody>
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
      </>
    );
  }
}

export default PostsCard;
