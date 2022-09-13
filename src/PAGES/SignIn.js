import React from 'react'
import Button from './Button'
import vector from './Images/Vector.svg'

const SignIn = ({sign}) => {
    return (

        <div className='bg-[#F0F0F0F0] bg-opacity-[94%] absolute justify-center text-center  pt-[111px] top-0 bottom-0 m-[auto] right-0 left-0 h-screen'>
            <div className='bg-[#FDfeff] w-[653px] absolute justify-center text-center h-[772px] pt-[111px] top-0 bottom-0 m-[auto] right-0 left-0 '>
                <div onClick={() => sign(false)} className='cursor-pointer flex justify-end mr-8 mb-16'>
                    <img src={vector} alt="close" />
                </div>
                <div className=' text-center '>
                    <h1 className='mb-[12px] '>Welcome Back.</h1>
                    <p className='mb-[33px]'>Email</p>
                    <hr className='border-1 border-[#727272]  m-[auto] w-[415px]  mb-[35px]' />
                    <p className='mb-[33px] '>Password</p>
                    <hr className='border-1 border-[#727272]  m-[auto] w-[415px]  mb-[38px]' />
                    <Button customClass="mb-[29px] w-[415px] rounded-[8px] text-white" title={'Continue'} />
                    <p className=''>No Account? Sign up</p>
                </div>

            </div>
        </div>
    )
}

export default SignIn