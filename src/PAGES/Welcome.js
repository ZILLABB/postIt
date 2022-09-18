import React from 'react'
import postIt from './Images/Postit 1.png'
import ellipse from './Images/Ellipse 1.png'
import Button from './Button'
import unSplash from './Images/unsplash_Z2bJeJQRbW0.png'
import Footer from './Footer'


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
           <Footer/>
        </div>
    )
}

export default Welcome