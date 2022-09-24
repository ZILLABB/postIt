import React from 'react'
import Button from '../Atoms/Button'
import ellipse from '../../Images/Ellipse 1.png'
import rec9 from '../../Images/Rectangle 9.svg'



const FirstBanner = () => {
    return (
        <div className='lg:px-[100px] pt-[50.77px] px-[20px] '>
            <Button customClass="text-white bg-[#6397E5] w-[130.48px] h-[37.28px] rounded-[7.76662px] mb-[20.74px] " title={"Technology"} />
            <h1 className='mb-[22.5px] lg:text-[62.133px] text-[32px]'>
                The 20 Biggest Fintech Companies In <br /> Nigeria 2022
            </h1>
            <div className='flex text-center justify-start m-[auto] gap-[17.9px] mb-[25.7px] '>
                <img src={ellipse} alt="" />
                <p>By Maria Davies  -  May 21, 2022</p>
            </div>
            <hr className='text-black  rounded-[1.55332px] mb-[55.92px] border-[2px]  ' />
            <div>
                <img className='lg:w-[1238px] w-full lg:h-[537.45px] rounded-[7.76662px] mb-[55.28px] ' src={rec9} alt="" />
            </div>
        </div>
    )
}

export default FirstBanner