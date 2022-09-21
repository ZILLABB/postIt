import React from 'react'
import Button from '../../components/Atoms/Button'

const Input = () => {
  return (
      <div>
          <div className='lg:pl-[100px] p-4 '>
              <h1 className='mb-[8px] text-[30px] font-bold'>
                  Create Story
              </h1>
              <div className='h-[61px] lg:w-[1239px] border-2 border-[#DDDDDD] mb-[41px]  '>
                  <input type="text" placeholder='Title' />
              </div>
              <div className='h-[61px]  lg:w-[1239px] border-2 border-[#DDDDDD] mb-[41px] '>
                  <input type="text" placeholder='Tags' />
              </div>
              <div className='h-[568px]  lg:w-[1239px] border-2 border-[#DDDDDD] mb-[41px] '>
                  <input type="text" placeholder='Write your story......' />
              </div>
              <div className='pl-[399px] mb-[46px]'>
                  <Button customClass="text-white w-[438.55px] h-[67px] rounded-[5px]  " title={'Publish Story'} />

              </div>

          </div>
    </div>
  )
}

export default Input