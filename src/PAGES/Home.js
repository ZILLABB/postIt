import React, { useState } from "react";
import Button from "./Button";
import postIt from "./Images/Postit 1.png";
import coffee from "./Images/Rectangle 3.png";
import rec from "./Images/Rectangle 5.png";
import rec1 from "./Images/Rectangle 5-1.png";
import rec2 from "./Images/Rectangle 5-2.png";
import rec38 from './Images/Rectangle 38.png'
import twitter from './Images/twitter.png'
import faceBook from './Images/facebook.png'
import instagram from './Images/insta.png'
import GetStarted from './GetStarted';
import SignIn from "./SignIn";

const Home = () => {
    const [show, setShow] = useState(false);
    const [sign, setSign] = useState(false);

    return (
        <div className="main">
            <div class="flex justify-between px-[100px] py-[34px] ">
                <img src={postIt} class="w-[98px] h-[25px] " alt="Logo" />
                <nav class=" ">
                    <ul class="flex justify-between float-right gap-[30px] cursor-pointer">
                        <li>Stories</li>
                        <li>Contact</li>
                        <li  onClick={() => setSign(true) }>Sign In</li>
                        <li class="float-right text-white">
                            < Button title={"Get Started"} onClick={() => setShow(true) } />
                        </li>
                    </ul>
                </nav>
            </div>
            <section class="">
                <img src={coffee} class="static" alt="coffeePicture" />
                <div class="absolute
                top-2 mt-[220px] mb-[28px] mx-[100px] ">
                    <h1 class="font-bold text-4xl text-[50px] mb-[28px]">
                        Stay Curious
                    </h1>
                    <article class="w-[593px] h-[105px] mb-[26px]">
                        Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br /> egestas
                        massa velit aliquam. Molestim bibendum <br /> hnt ipsum orci, platea
                        aliquam id ut.
                    </article>
                    <Button customClass="text-white" title={"Get Started"} />
                </div>
            </section>
            <div class="flex w-[1179px] h-[145px] border-solid border-[0.5px] border-[#BBBBBB] mt-[68px] rounded-[3px] mb-[70px] m-[auto] ">
                <img
                    src={rec}
                    class="w-[146px] h-[96px] mr-[18px] mt-[23px] mx-[24px] "
                    alt="rec"
                />
                <div>
                    <Button
                        customClass="bg-[#E5BF5E] text-white w-[89px] h-[24px] mt-[30px] my-[18px]"
                        title={"Lifestyle"}
                    />
                    <p className="w-[217px] h-[51px] ">
                        The 20 Biggest Fashion Companies In Nigeria 2022
                    </p>
                </div>
                <img src={rec1} class="w-[146px] h-[96px]  mt-[23px]" alt="rec-1" />
                <div>
                    <Button
                        customClass="bg-[#41D750] text-white w-[89px] h-[24px] mt-[30px] mx-[18px] my-[18px] "
                        title={"Nature"}
                    />
                    <p className="w-[217px] h-[51px] mx-[18px]">
                        The 20 Biggest Fashion Companies In Nigeria 2022
                    </p>
                </div>
                <img src={rec2} class="w-[146px] h-[96px] mt-[23px]" alt="rec-2" />
                <div>
                    <Button
                        customClass="text-white w-[89px] h-[24px] mt-[30px] mx-[18px]"
                        title={"Technology"}
                    />
                    <p className="w-[217px] h-[51px] my-[18px] mx-[18px]">
                        The 20 Biggest Fashion Companies In Nigeria 2022
                    </p>
                </div>
            </div>
            <div className="">
                <img className="relative w-[1179px] h-[250px] m-[auto] mb-[70px]  " src={rec38} alt="wavy" />
            </div>
            <div className=" absolute top-[1007px] mx-[397px] text-center  ">

                <h1 className="mb-[22px] m-[auto]  ">
                    Try Postit.
                </h1>
                <h5 className="mb-[43px]">
                    Do you want to write or discover stories from writers on any topic?
                </h5>
                <div className="flex w-[496px] h-[39px] ">
                    <input className="w-[496px] rounded-tr-none 
                     " type="text" placeholder="Enter email here" />

                    <Button customClass="text-white w-[156px] h-[39px]  
                    rounded-l-none " title={"Get started"} />
                </div>
            </div>
            <footer className=" ">
                <div className="flex bg-[black] text-white">
                    <div className="mt-[63px]   " >
                        <h3 className="mb-[14px] font-bold ">
                            About Postit.
                        </h3>
                        <p className="w-[427px] h-[140px] mr-[95px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet. que maeae tortoere necsem commodo ac.
                        </p>
                    </div>
                    <div className="mt-[63px]">
                        <h3 className="mr-[102px] mb-[14px] font-bold ">
                            Quick Menu
                        </h3>
                        <ul>
                            <li>Home</li>
                            <li>Stories</li>
                            <li>Trending Stories</li>
                            <li>Popular Stories</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="mr-[117px] mt-[109px] ">Sign Up</li>
                            <li>Log In</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-[28px] mt-[63px] font-bold">Subscribe to our newsletter</h2>
                        <div className="flex w-[337px]">
                            <input type="text" className="w-[337px] h-[39px] absolute" placeholder="Email address" />
                            <Button customClass="absolute text-white bg-[#0086B0] w-[103px] h-[27px] mt-[6px] mx-[226px] rounded-[2px] " title={"Subscribe"} />
                        </div>

                    </div>

                </div>
                <div className="bg-black">
                    <hr />
                    <div className="flex gap-2 justify-end p-2">
                        <p className="text-white">Terms and Policy</p>
                        <img src={twitter} alt="Twitter" />
                        <img src={faceBook} alt="facebook" />
                        <img src={instagram} alt="Instagram" />
                    </div>

                </div>



            </footer>
            {show && <GetStarted show={setShow} />}
            {sign && <SignIn sign={setSign} />}

        </div>
    );
};

export default Home;
