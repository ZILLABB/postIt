import React from 'react'
import postIt from './Images/Postit 1.png'
import ellipse from './Images/Ellipse 1.png'
import unSplash from './Images/unsplash_Z2bJeJQRbW0.png'
import rec1 from './Images/Rectangle 42-1.svg'
import rec2 from './Images/Rectangle 42-2.svg'
import rec3 from './Images/Rectangle 42-3.svg'
import rec4 from './Images/Rectangle 42-4.svg'
import rec5 from './Images/Rectangle 42-5.svg'
import rec6 from './Images/Rectangle 42-6.svg'
import rec7 from './Images/Rectangle 42-7.svg'
import rec8 from './Images/Rectangle 42-8.svg'
import rec9 from './Images/Rectangle 42-9.svg'
import rec10 from './Images/Rectangle 42-10.svg'
import Footer from './Footer'


const Stories = () => {
    return (
        <div>
            <div className="flex justify-between px-[100px] py-[34px] shadow-md   ">
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
            <div className='flex p-[100px] bg-[#F5F6F8] mb-[69px]  '>
                <div className='mr-[49px]  '>
                    <h1 className='mb-[25px] text-[75px]'>
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
            <div className='grid grid-cols-3 px-[100px] '>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec1} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec2} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.
                       </p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec3} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div>
                    <img className='mb-[26px]' src={rec4} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec5} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec6} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec7} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec8} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec9} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec10} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec10} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
                <div classname='mr-[50px]'>
                    <img className='mb-[26px]' src={rec10} alt="" />
                    <h1 className='text-[22px] mb-[70px] '>The 20 Biggest Fintech Companies <br /> In Nigeria 2022</h1>
                    <p className='mb-[113px]'> Lorem ipsum dolor sit amet, consectetur adipisjjque <br /> vel, metus auam adipiscing massa. Nec ornare leo <br /> consequat, sociis. Tellus nisl, portti eniilisi vel <br /> venbbbggklit ornare eget sit.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Stories