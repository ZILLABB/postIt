import React from 'react'
import Button from '../Atoms/Button'



const FirstPart = () => {
    return (
        <div className='lg:px-[100px] px-5  '>
            <div className='lg:flex justify-between  '>
                <h1 className='text-[62.6721px] mb-[43.87px] '>
                    My Stories
                </h1>
                <Button customClass="bg-black text-white w-[197.42px] h-[54.84px] rounded-[7.83401px] mb-5 mt-10 " title={"write stories"} />
            </div>

            <ul className='lg:flex gap-[47.61px] text-[37.6032px]'>
                <li>All</li>
                <li>Draft</li>
                <li>Published</li>
            </ul>
            <hr className='lg:mb-[72.07px] mb-10 ' />
        </div>
    )
}

export default FirstPart