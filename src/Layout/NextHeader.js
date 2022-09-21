import React from 'react'
import postIt from '../Images/Postit 1.png'
import ellipse from '../Images/Ellipse 1.png'
import Hamburger from '../Images/Hamburger.png'

const NextHeader = () => {
    return (
        <div>
            <div className="flex justify-between lg:px-[100px] p-4 lg:p-0 lg:py-[34px] shadow-md   ">
                <img src={postIt} className="w-[68px] h-[18px] lg:w-[98px] lg:h-[25px]  " alt="Logo" />
                <img src={Hamburger} className="w-[30px] h-[30px] lg:hidden " alt="" />
                <nav className=" hidden lg:block">
                    <ul className=" lg:flex justify-between float-right gap-[30px]">
                        <li>Stories</li>
                        <li>Contact</li>
                        <img className='w-[54px] h-[54px] mt-[-15px]' src={ellipse} alt="" />
                        <li className="float-right text-white">
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}

export default NextHeader