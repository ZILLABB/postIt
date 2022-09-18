import React from 'react'
import postIt from './Images/Postit 1.png'
import ellipse from './Images/Ellipse 1.png'
import Button from './Button'
import Footer from './Footer'
const EditStory = () => {
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
                    <input type="text" placeholder='Title:' />
                </div>
                <div className='h-[61px] w-[1239px] border-2 border-[#DDDDDD] mb-[41px] '>
                    <input type="text" placeholder='Tags:Technology' />
                </div>
                <div className='h-[568px] w-[1239px] border-2 border-[#DDDDDD] mb-[41px] '>
                    <input type="text" placeholder='Write your story......' />
                </div>
                <div className='pl-[399px] mb-[46px]'>
                    <Button customClass="text-white w-[438.55px] h-[67px] rounded-[5px]  " title={'Update Story'} />

                </div>

            </div>
           <Footer/>
        </div>
    )
}

export default EditStory