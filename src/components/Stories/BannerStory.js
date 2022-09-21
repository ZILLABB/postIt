import React from 'react'
import unSplash from '../../Images/unsplash_Z2bJeJQRbW0.png'


const BannerStory = () => {
    return (
        <div>
            <div className='lg:flex lg:p-[100px] bg-[#F5F6F8] mb-[69px] p-5 '>
                <div className='mr-[49px]  '>
                    <h1 className='lg:mb-[25px] text-[50px] lg:text-[75px]'>
                        You’ve got a story, Post<span className='text- [#0086B0]  ' >it.</span>
                    </h1>
                    <article className='mb-[40px]  '>
                        Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />
                        egestas massa velit aliquam. Molestim bibendum <br />
                        hnt ipsum orci, platea aliquam id ut.
                    </article>
                </div>
                <div>
                    <img src={unSplash} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BannerStory