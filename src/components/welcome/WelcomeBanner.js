import React from 'react'
import Button from '../Atoms/Button'
import unSplash from '../../Images/unsplash_Z2bJeJQRbW0.png'


const WelcomeBanner = () => {
    return (
        <div>
            <div className='lg:flex lg:pt-[103px] lg:px-[100px] mt-6  px-2'>
                <div>
                    <h1 className='mb-[25px] lg:text-[55px] font-bold '>
                        Welcome Maria,
                    </h1>
                    <article className='mb-[40px]  '>
                        Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
                        egestas massa velit aliquam. Molestim bibendum <br />
                        hnt ipsum orci, platea aliquam id ut.
                    </article>
                    <div className='flex gap-[20px] mb-10'>
                        <Button customClass="text-white  lg:w-[230px] h-[52px] " title={"My stories"} />
                        <Button customClass="text-[#0086B0] lg:w-[230px] h-[52px]  bg-[white] border-[#0086B0] border-[1px]" title={"Go to Feed"} />
                    </div>

                </div>
                <div>
                    <img src={unSplash} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner