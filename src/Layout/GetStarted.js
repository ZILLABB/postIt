import React from 'react'
import Button from '../components/Atoms/Button'
import vector from '../Images/Vector.svg'

const GetStarted = ({show}) => { 
   
    return (
        <div className='fixed bg-[#F0F0F0F0] bg-opacity-[94%] justify-center text-center  pt-[111px] top-0 bottom-0 m-[auto] right-0 left-0 h-screen'>
            <div className='bg-[#FDfeff] w-[653px] absolute justify-center text-center h-[772px] pt-[111px] top-0 bottom-0 m-[auto] right-0 left-0 '>
                <div onClick={() => show(false)} className='cursor-pointer flex justify-end mr-8 mb-16'>
                    <img  src={vector} alt="close" />
                </div>
                <div className=' text-center  '>
                    <h1 className='mb-3 mt-[] '>Join Post <span className='text-[#0086B0]'>it.</span> </h1>
                    <p className=' mb-[38px]'>Enter your email address to create an account on Postit.</p>
                    <p className='mb-[33px]'>Username</p>
                    <hr className='border-1 border-[#727272]  m-[auto] w-[415px]  mb-[35px]' />
                    <p className='mb-[33px] '>Your Email Address</p>
                    <hr className='border-1 border-[#727272]  m-[auto] w-[415px]  mb-[35px]' />
                    <p className='mb-[33px] '>Password</p>
                    <hr className='border-1 border-[#727272]  m-[auto] w-[415px]  mb-[38px]' />
                    <Button customClass="mb-[29px] w-[415px] rounded-[8px] text-white" title={'Continue'} />
                    <p className=''>Already have an account?<span className='text-[#0086B0] '> Sign In</span> </p>
                </div>

            </div>
        </div>
    )
}

export default GetStarted