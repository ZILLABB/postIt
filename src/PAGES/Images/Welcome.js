import React from 'react'
import postIt from './Postit 1.png'
import ellipse from './Ellipse 1.png'
import Button from '../Button'
import unSplash from './unsplash_Z2bJeJQRbW0.png'
import twitter from './twitter.png'
import faceBook from './facebook.png'
import instagram from './insta.png'


const Welcome = () => {
    return (
        <div>
            <div className="flex justify-between px-[100px] py-[34px] shadow-md mb-[107px]  ">
                <img src={postIt} class="w-[98px] h-[25px] " alt="Logo" />
                <nav class=" ">
                    <ul class="flex justify-between float-right gap-[30px]">
                        <li>Stories</li>
                        <li>Contact</li>
                        <img className='w-[54px] h-[54px] mt-[-15px]' src={ellipse} alt="" />
                        <li class="float-right text-white">
                        </li>
                    </ul>
                </nav>
                
            </div>
            <div className='flex p-[100px]'>
                <div>
                    <h1 className='mb-[25px]'>
                        Welcome Maria,
                    </h1>
                    <article className='mb-[40px]  '>
                        Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
                        egestas massa velit aliquam. Molestim bibendum <br />
                        hnt ipsum orci, platea aliquam id ut.
                    </article>
                    <div className='flex gap-[20px]'>
                        <Button customClass="text-white  w-[230px] h-[52px] " title={"My stories"} />
                        <Button customClass="text-[#0086B0] w-[230px] h-[52px]  bg-[white] border-[#0086B0] border-[1px]" title={"Go to Feed"} />
                    </div>
                    
                </div>
                <div>
                    <img src={unSplash} alt="" />
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
        </div>
    )
}

export default Welcome