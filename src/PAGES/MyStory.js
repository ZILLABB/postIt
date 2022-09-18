import React from 'react'
import postIt from './Images/Postit 1.png'
import ellipse from './Images/Ellipse 1.png'
import Button from './Button'
import Footer from './Footer'

const MyStory = () => {
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
            <div className='px-[100px] m-[auto] '>
                <div className='flex justify-between  '>
                    <h1 className='text-[62.6721px] mb-[43.87px] '>
                        My Stories
                    </h1>
                    <Button customClass="bg-black text-white w-[197.42px] h-[54.84px] rounded-[7.83401px]  " title={"write stories"} />
                </div>

                <ul className='flex gap-[47.61px] text-[37.6032px]'>
                    <li>All</li>
                    <li>Draft</li>
                    <li>Published</li>
                </ul>
                <hr className='mb-[72.07px] ' />

                <div className=''>
                    <div className='flex justify-between'>
                        <h1 className='text-[28.2024px]  mb-[20.37px] '>
                            The 20 Biggest Fintech Companies In <br /> Nigeria 2022
                        </h1>
                        <div className='flex gap-[54.55px] '>
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] text-[white]  " title={"Edit Post"} />
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] bg-[white]  border-[1.5668px] text-[#0086B0] border-solid  " title={"Delete"} />

                        </div>
                    </div>
                    <article className='mb-[111.15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing <br /> massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, <br /> constur adipisjj que ve....
                    </article>
                    

                </div>
                <div className=''>
                    <div className='flex justify-between'>
                        <h1 className='text-[28.2024px] mb-[20.37px]'>
                            The 20 Biggest Fintech Companies In <br/> Nigeria 2022
                        </h1>
                        <div className='flex gap-[54.55px] '>
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] text-[white]  " title={"Edit Post"} />
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] bg-[white]  border-[1.5668px] text-[#0086B0] border-solid  " title={"Delete"} />

                        </div>
                    </div>
                    <article className='mb-[111.15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing <br /> massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, <br /> constur adipisjj que ve....
                    </article>
                    

                </div>
                <div className=''>
                    <div className='flex justify-between'>
                        <h1 className='text-[28.2024px] mb-[20.37px]'>
                            The 20 Biggest Fintech Companies In <br/> Nigeria 2022
                        </h1>
                        <div className='flex gap-[54.55px] '>
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] text-[white]  " title={"Edit Post"} />
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] bg-[white]  border-[1.5668px] text-[#0086B0] border-solid  " title={"Delete"} />

                        </div>
                    </div>
                    <article className='mb-[111.15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing <br /> massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, <br /> constur adipisjj que ve....
                    </article>
                    

                </div>
                <div className=''>
                    <div className='flex justify-between'>
                        <h1 className='text-[28.2024px] mb-[20.37px]'>
                            The 20 Biggest Fintech Companies In <br/> Nigeria 2022
                        </h1>
                        <div className='flex gap-[54.55px] '>
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] text-[white]  " title={"Edit Post"} />
                            <Button customClass="w-[164.51px] h-[51.7px] rounded-[7.83401px] bg-[white]  border-[1.5668px] text-[#0086B0] border-solid  " title={"Delete"} />

                        </div>
                    </div>
                    <article className='mb-[111.15px]'>
                        Lorem ipsum dolor sit amet, consectetur adipisgsque vel, metus auam acing <br /> massa. Nec ornare leo consequat, sociis. Lorem ipsum dolor sit amet, <br /> constur adipisjj que ve....
                    </article>
                    

                </div>
                  
                


            </div>



            <Footer />
            
        </div>
    )
}

export default MyStory