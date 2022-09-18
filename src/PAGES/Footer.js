import React from 'react'
import twitter from './Images/twitter.png'
import faceBook from './Images/facebook.png'
import instagram from './Images/insta.png'
import Button from "./Button";




const Footer = () => {
    return (
        <div>
            <footer className="px-[] bg-black ">
                <div className='px-[100px]'>
                    <div className="flex py-[63px] justify-around text-white">
                        <div className=''>
                            <h3 className="mb-[14px] font-bold ">
                                About Postit.
                            </h3>
                            <p className="w-[427px] h-[140px] mr-[95px]  ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br /> neque fusce vitaenisi aliquet. que maeae tortoere <br /> necsem commodo ac.
                            </p>
                        </div>
                        <div className="">
                            <h3 className=" mb-[14px] font-bold ">
                                Quick Menu
                            </h3>
                            <ul className='mr-[89px]'>
                                <li>Home</li>
                                <li>Stories</li>
                                <li>Trending Stories</li>
                                <li>Popular Stories</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="mt-[16px] mr-[117px] ">Sign Up</li>
                                <li>Log In</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-7  font-bold">Subscribe to our newsletter</h2>
                            <div className="flex w-[337px]">
                                <input type="text" className="w-[337px] h-[39px] rounded-sm px-[13px] absolute" placeholder="Email address" />
                                <Button customClass="absolute text-white bg-[#0086B0] w-[103px] h-[27px] mt-[6px] mx-[226px] rounded-[2px] " title={"Subscribe"} />
                            </div>

                        </div>

                    </div>
                    <div className="bg-black">
                        <hr className='mb-[29px] w-[1240px] justify-center flex m-[auto] text-center ' />
                        <div className="flex gap-[28px] justify-end p-2">
                            <p className="text-white">Terms and Policy</p>
                            <img src={twitter} alt="Twitter" />
                            <img src={faceBook} alt="facebook" />
                            <img src={instagram} alt="Instagram" />
                        </div>

                    </div>


                </div>


            </footer>
        </div>
    )
}

export default Footer