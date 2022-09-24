import React, { useState } from "react";
import postIt from "../Images/Postit 1.png";
import Button from "../components/Atoms/Button";
import Hamburger from "../Images/Hamburger.png";
import GetStarted from "./GetStarted";
import SignIn from "./SignIn";

const Header = () => {
  const [show, setShow] = useState(false);
  const [sign, setSign] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);



  return (
    <div>
      <div className="flex justify-between lg:px-[100px] lg:py-[34px] p-4 lg:p-0 ">
        <img
          src={postIt}
          className="w-[68px] h-[18px] lg:w-[98px] lg:h-[25px]  "
          alt="Logo"
        />
        <img
          onClick={() => setNavbarOpen(!navbarOpen)}
          src={Hamburger}
          className="w-[30px] h-[30px] lg:hidden "
          alt=""
        />
        <nav className=" hidden lg:block">
          <ul className="flex cursor-pointer gap-[30px]">
            <li>Stories</li>
            <li>Contact</li>
            <li onClick={() => setSign(true)}>Sign In</li>
            <li className=" text-white">
              <Button title={"Get Started"} onClick={() => setShow(true)} />
            </li>
          </ul>
        </nav>
      </div>
      {navbarOpen && (
        <nav className=" lg:hidden ">
          <ul className=" block align-center cursor-pointer gap-[30px] leading-10 text-[25px] ">
            <li>Stories</li>
            <li>Contact</li>
            <li onClick={() => setSign(true)}>Sign In</li>
          </ul>
            <div className=" text-white">
              <Button title={"Get Started"} onClick={() => setShow(true)} />
            </div>
        </nav>
      )}
      {show && <GetStarted show={setShow} />}
      {sign && <SignIn sign={setSign} />}
    </div>
  );
};

export default Header;
