import React from 'react'
import postIt from './Images/Postit 1.png'
import ellipse from './Images/Ellipse 1.png'
import twitter from './Images/twitter.png'
import faceBook from './Images/facebook.png'
import instagram from './Images/insta.png'
import Button from './Button'
const CreateStory = () => {
    return (
        <div className='main'>
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
            <div className='pl-[100px] '>
                <h1 className='mb-[8px]'>
                    Create Story
                </h1>
                <div className='h-[61px] w-[1239px] border-2 border-[#DDDDDD] mb-[41px]  '>
                    <input type="text" placeholder='Title' />
                </div>
                <div className='h-[61px] w-[1239px] border-2 border-[#DDDDDD] mb-[41px] '>
                    <input type="text" placeholder='Tags' />
                </div>
                <div className='h-[568px] w-[1239px] border-2 border-[#DDDDDD] mb-[41px] '>
                <input type="text" placeholder='Write your story......' />
                </div>
                <div className='pl-[399px] mb-[46px]'>
                    <Button customClass="text-white w-[438.55px] h-[67px] rounded-[5px]  " title={'Publish Story'} />

                </div>

            </div>
            <footer className=" ">
                <div className="flex bg-[black] text-white ">
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

export default CreateStory