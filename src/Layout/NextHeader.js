import React, { useState } from 'react'
import postIt from '../Images/Postit 1.png'
import ellipse from '../Images/Ellipse 1.png'
import Hamburger from '../Images/Hamburger.png'

const NextHeader = () => {

 const [ShowHeader,setShowHeader]=useState(false)

    return (
      <div>
        <div className="flex justify-between lg:px-[100px] p-4 lg:p-0 lg:py-[34px] shadow-md   ">
          <img
            src={postIt}
            className="w-[68px] h-[18px] lg:w-[98px] lg:h-[25px]  "
            alt="Logo"
          />
          <div className='flex gap-4'>
            <img
              className="w-[34px] h-[34px] mt-[1px] lg:hidden "
              src={ellipse}
              alt=""
            />
          <img
            onClick={() => setShowHeader(!ShowHeader)}
            src={Hamburger}
            className="w-[30px] h-[30px] lg:hidden "
            alt=""
          />
          </div>
          <nav className=" hidden lg:block">
            <ul className=" lg:flex justify-between float-right gap-[30px]">
              <li>Stories</li>
              <li>Contact</li>
              <img
                className="w-[54px] h-[54px] mt-[-15px]   "
                src={ellipse}
                alt=""
              />
              <li className="float-right text-white"></li>
            </ul>
          </nav>
        </div>
        {ShowHeader && (
          <nav className=" lg:hidden">
            <ul className=" block  cursor-pointer gap-[30px] leading-10 text-[18px]">
              <li>Stories</li>
              <li>Contact</li>

              <li className="float-right text-white"></li>
            </ul>
          </nav>
        )}
      </div>
    );
}

export default NextHeader