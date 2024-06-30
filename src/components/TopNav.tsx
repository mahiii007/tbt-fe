import React from "react";
import CreatePostDialog from "./CreatePostDialog";

const session = true;

const TopNav = () => {
  return (
    <div className="h-14 flex p-2 bg-white  justify-center items-center">
      <div className="basis-1/4 items-center">
        <span className="ml-3 font-extrabold text-black h-10 cursor-pointer">
          TBT
        </span>
      </div>
      <div className="basis-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="w-[80%] outline-none p-2 border rounded-lg"
        />
      </div>

      {session ? (
        <div className="basis-1/4 flex justify-end gap-2">
          <div className="flex justify-center items-center">
            {/* <button className=" p-2 border rounded-md hover:bg-purple-100 shadow-sm outline-none">
              + Publish
            </button> */}
            <CreatePostDialog />
          </div>

          <div className="flex  justify-center items-center gap-1 bg-purple-200 rounded-md p-1 cursor-pointer hover:bg-purple-100">
            <img
              className="h-9 w-9 object-cover rounded-full"
              src="https://cdn.pixabay.com/photo/2024/05/26/15/27/anime-8788959_1280.jpg"
              alt="profile_pic"
            />
            <div className="flex flex-col max-w-28 overflow-hidden whitespace-nowrap text-ellipsis">
              <p className="text-sm">UserName</p>
              <p className="text-xs font-extralight text-black-50">
                username@gmail.comvvvvvvvvvvvvvvvvvvvvvv
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="basis-1/4 flex justify-end gap-4">
          <button className="p-2 border rounded-md hover:bg-purple-100 shadow-sm outline-none">
            Log In
          </button>
          <button className="p-2 text-purple-500 rounded-md border border-purple-500 hover:bg-gray-100 shadow-sm outline-none">
            Create account
          </button>
        </div>
      )}
    </div>
  );
};

export default TopNav;
