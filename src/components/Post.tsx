import React from "react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import CarouselCard from "./CarouselCard";

const imgUrls = [
  "https://cdn.pixabay.com/photo/2024/06/01/01/33/anime-8801333_960_720.png",
  "https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/12/01/04/34/sunset-7628289_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/01/06/12/28/ninja-7701126_960_720.jpg",
  "https://cdn.pixabay.com/photo/2024/01/27/17/27/ai-generated-8536463_960_720.png",
  "https://cdn.pixabay.com/photo/2023/05/04/20/37/colourful-7971057_1280.jpg",
];

const Post = () => {
  return (
    <div className="bg-white p-2 mb-3 rounded-sm cursor-pointer hover:bg-purple-50">
      <div className="flex gap-2 items-center border-b mb-3 p-2 w-full">
        <div className="w-14 h-14">
          <img
            className="w-full h-full object-cover rounded-full"
            src={imgUrls[0]}
            alt="profile_pic"
          ></img>
        </div>
        <div className="w-[92%]">
          <div className="font-semibold">Lazy Lad</div>
          <div className="text-xs font-extralight text-gray-500">
            3 days ago
          </div>
        </div>
      </div>
      <div className="text-sm mb-3">
        <p>
          I like money. You know why? Because money can replace everything. It
          lets you buy things. It lets you buy lives. It lets you buy people. It
          lets you buy hearts. It lets you buy happiness. It lets you buy
          dreams. I love money because it s so important and yet not
          irreplaceable so looking at it the other way around, I hate
          irreplaceable things. “I can t live without this.” “That s the only
          reason I m alive." “That s my only purpose in life?” Things that have
          scarcity value like that piss me off the most.
        </p>
      </div>
      <div className="mb-3 ">
        <CarouselCard imgUrls={imgUrls}></CarouselCard>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="flex items-center cursor-pointer hover:text-purple-400">
            <AiOutlineLike className="h-7 w-7 cursor-pointer mr-1" />
            <span className="text-sm">Like</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-purple-400">
            <AiOutlineComment className="h-7 w-7 cursor-pointer mr-1" />
            <span className="text-sm">Comment</span>
          </div>
        </div>

        <div>
          <span className="text-sm">50 Likes . 10 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
