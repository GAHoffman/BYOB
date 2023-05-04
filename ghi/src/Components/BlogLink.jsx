import React from "react";

const BlogLink = () => {
  return (
    <>
      <a href="https://www.gardendesign.com/" target="_blank" rel="noreferrer">
        <div className="mt-4">
          <div className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
            <img
              className="h-[34px] rounded-full"
              src="/Carrots.jpeg"
              alt="carrots"
            />
            <h1 className="font-medium">Garden Design</h1>
          </div>
        </div>
      </a>
      <a href="https://misfitgardening.com/" target="_blank" rel="noreferrer">
        <div className="mt-4">
          <div className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
            <img
              className="h-[34px] rounded-full"
              src="/Jalapeno.jpeg"
              alt="Jalapeno"
            />
            <h1 className="font-medium">Misfit Gardening</h1>
          </div>
        </div>
      </a>
      <a href="http://www.yougrowgirl.com/" target="_blank" rel="noreferrer">
        <div className="mt-4">
          <div className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
            <img
              className="h-[34px] rounded-full"
              src="/pomegranate.jpeg"
              alt="pomegranate"
            />
            <h1 className="font-medium">You Grow Girl</h1>
          </div>
        </div>
      </a>
      <a href="https://awaytogarden.com/" target="_blank" rel="noreferrer">
        <div className="mt-4">
          <div className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
            <img
              className="h-[34px] rounded-full"
              src="/strawberries.jpeg"
              alt="strawberries"
            />
            <h1 className="font-medium">A Way to Garden</h1>
          </div>
        </div>
      </a>
      <a
        href="https://frustratedgardener.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="mt-4">
          <div className="flex gap-3 items-center hover:bg-gray-200 cursor-pointer">
            <img
              className="h-[34px] rounded-full"
              src="/corn.jpeg"
              alt="corn"
            />
            <h1 className="font-medium">Frustrated Gardener</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default BlogLink;
