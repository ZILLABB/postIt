import React from 'react'
import Button from '../../components/Atoms/Button'

const Input = () => {
  return (
    <div>
      <div className="lg:px-[100px] p-2 ">
        <h1 className="mb-[8px] text-[30px] font-bold">Create Story</h1>
        <div className=" ">
          <input
            className="h-[61px] w-full border-2 border-[#DDDDDD] mb-[41px] "
            type="text"
            placeholder="Title"
          />
        </div>
        <div className=" ">
          <input
            className="h-[61px]  w-full border-2 border-[#DDDDDD] mb-[41px]"
            type="text"
            placeholder="Tags"
          />
        </div>
        <div className="">
          <input
            className="h-[568px]  w-full border-2 border-[#DDDDDD] mb-[41px] "
            type="text"
            placeholder="Write your story......"
          />
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
}

export default Input