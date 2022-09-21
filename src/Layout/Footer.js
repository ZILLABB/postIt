import React from 'react'
import twitter from '../Images/twitter.png'
import faceBook from '../Images/facebook.png'
import instagram from '../Images/insta.png'
import Button from "../components/Atoms/Button";




const Footer = () => {
    return (
        <div>
            <footer className="text-center lg:text-left bg-black ">
                <div className='lg:px-[100px]'>
                    <div className="lg:flex py-[30px] lg:py-[63px] lg:justify-around text-white ">
                        <div className=''>
                            <h3 className="mb:[7px] lg:mb-[14px] font-bold ">
                                About Postit.
                            </h3>
                            <p className="p-4 lg:p-0 lg:mr-[95px]  ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br /> neque fusce vitaenisi aliquet. que maeae tortoere <br /> necsem commodo ac.
                            </p>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <h3 className=" mb-[14px] font-bold ">
                                Quick Menu
                            </h3>
                            <ul className='lg:mr-[89px]'>
                                <li>Home</li>
                                <li className='mt-2 lg:mt-0'>Stories</li>
                                <li className='mt-2 lg:mt-0'>Trending Stories</li>
                                <li className='mt-2 lg:mt-0'>Popular Stories</li>
                            </ul>
                        </div>
                        <div >
                            <ul className='flex lg:flex-col lg:mr-[117px] lg:gap-0 lg:mt-0 gap-4 mt-6 justify-center'>
                                <div className="lg:mt-[16px] ">SignUp</div>
                                <li>Log In</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='mt-6 lg:mt-0'>
                            <h2 className="mb-7 font-bold">Subscribe to our newsletter</h2>
                            <div className="flex justify-between m-4 lg:m-0 px-2 lg:w-[200px] xl:w-[337px] bg-white relative">
                                <input type="text" className="lg:w-[250px] xl:w-[337px] h-[39px] rounded-sm xl:px-[13px] lg:absolute" placeholder="Email address" />
                                <Button customClass="lg:absolute text-white bg-[#0086B0] w-[103px] h-[27px] mt-[3px] lg:ml-[140px] xl:ml-[200px] rounded-[2px] " title={"Subscribe"} />
                            </div>

                        </div>

                    </div>
                    <div className="bg-black">
                        <hr className='mb-[29px] ' />
                        <div className="flex gap-[28px] justify-end p-2">
                            <p className="text-white mb- ">Terms and Policy</p>
                            <div className='flex mt-2 gap-[28px]'>

                            <img src={twitter} className="w-5 h-4 " alt="Twitter" />
                            <img src={faceBook} className="w-5  h-4  " alt="facebook" />
                            <img src={instagram} className="w-5  h-4  " alt="Instagram" />
                            </div>
                        </div>
  h-5  
                    </div>


                </div>


            </footer>
        </div>
    )
}

export default Footer