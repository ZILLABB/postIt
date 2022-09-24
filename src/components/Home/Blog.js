import React from "react";
import rec from "../../Images/Rectangle 5.png";
import rec1 from "../../Images/Rectangle 5-1.png";
import rec2 from "../../Images/Rectangle 5-2.png";
import Button from "../Atoms/Button";

const Blog = () => {
  return (
    <div className=" flex justify-center">
      <div class="lg:flex lg:justify-center lg:w-[1240px]  lg:h-[145px] grid lg:border-solid lg:border-[0.5px] lg:border-[#BBBBBB] mt-[68px] px-2 rounded-[3px] mb-[70px] ">
        <img
          src={rec}
          class="w-[350px] object-cover lg:w-[146px] lg:h-[96px] lg:mr-[18px] mt-[23px] lg:mx-[24px] px-2 lg:px-0 "
          alt="rec"
        />
        <div className="">
          <Button
            customClass="bg-[#E5BF5E] text-white w-[89px] h-[24px] mt-[30px] my-[18px]"
            title={"Lifestyle"}
          />
          <p className="w-[217px] h-[51px] ">
            The 20 Biggest Fashion Companies In Nigeria 2022
          </p>
        </div>
        <img
          src={rec1}
          class="w-full object-cover lg:w-[146px] lg:h-[96px] lg:mr-[18px] mt-[23px] lg:mx-[24px] px-2"
          alt="rec-1"
        />
        <div>
          <Button
            customClass="bg-[#41D750] text-white w-[89px] h-[24px] mt-[30px] mx-[18px] my-[18px] "
            title={"Nature"}
          />
          <p className="w-[217px] h-[51px] mx-[18px]">
            The 20 Biggest Fashion Companies In Nigeria 2022
          </p>
        </div>
        <img
          src={rec2}
          class="w-full object-cover lg:w-[146px] lg:h-[96px] lg:mr-[18px] mt-[23px]  px-2"
          alt="rec-2"
        />
        <div>
          <Button
            customClass="text-white w-[105px] h-[24px] mt-[30px] mx-[18px]"
            title={"Technology"}
          />
          <p className="w-[217px] h-[51px] my-[18px] mx-[18px]">
            The 20 Biggest Fashion Companies In Nigeria 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
