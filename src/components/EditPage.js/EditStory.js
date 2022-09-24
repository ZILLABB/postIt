import React from "react";
import Button from "../Atoms/Button";

const EditStory = () => {
  return (
    <div className="   mt-[60px]">
      <div className="lg:px-[100px] px-20 ">
        <div>
          <input
            className="h-[61px]  border-2 border-[#DDDDDD] mb-[41px]   w-full"
            type="text"
            placeholder="Title"
          />
        </div>
        <div className="">
          <input
            className="h-[61px]   border-2 border-[#DDDDDD] mb-[41px]  w-full"
            type="text"
            placeholder="Tags"
          />
        </div>
        <div className=''>
          <input className="h-[568px] w-full   border-2 border-[#DDDDDD] mb-[41px] " type="text" placeholder="Write your story......" />
        </div>
        <div className="flex justify-center  mb-[46px] ">
          <Button
            customClass="  text-white lg:w-[438.55px] w-[238px] lg:h-[67px] h-[44px] rounded-[5px]  "
            title={"Publish Story"}
          />
        </div>
      </div>
    </div>
  );
};

export default EditStory;
