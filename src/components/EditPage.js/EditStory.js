import React from 'react'
import Button from '../Atoms/Button'

const EditStory = () => {
    return (
        <div className='flex lg:px-[100px] justify-center mt-[60px]'>
            <div>
                <div >
                    <input className='h-[61px] rounded-[5px] w-[300px]  lg:w-[1239px] border-2 border-[#DDDDDD] mb-[41px]' type="text" placeholder='Title:' multiple />
                </div>

                <div >
                    <input className='h-[61px] rounded-[5px] w-[300px]  lg:w-[1239px] border-2 border-[#DDDDDD] mb-[41px]' type="text" placeholder='Title:' multiple />
                </div>
                
                <div >
                    <input className='lg:h-[568px] h-[400px]  lg:w-[1239px] w-[300px]  rounded-[5px] border-2 border-[#DDDDDD] mb-[41px] ' type="text" placeholder='Write your story......' />
                </div>
                <div className='flex justify-center mb-[46px]'>
                    <Button customClass="text-white lg:w-[438.55px] h-[67px] rounded-[5px]  " title={'Update Story'} />

                </div>

            </div>
        </div>
    )
}

export default EditStory