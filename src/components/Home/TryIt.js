import React from 'react'
import Button from "../Atoms/Button";
import rec38 from '../../Images/Rectangle 38.png'

const TryIt = () => {
  return (
      <div>
          <div className="relative" >
              <img className="relative lg:w-[1179px] h-[250px] m-[auto] mb-[70px]  " src={rec38} alt="wavy" />

              <div className=" absolute top-10 bottom-4 right-0 left-0  text-center px-2 ">

                  <h1 className="mb-[22px] m-[auto]  ">
                      Try Postit.
                  </h1>
                  <h5 className="mb-[43px] ">
                      Do you want to write or discover stories from writers on any topic?
                  </h5>
                  <div className="flex w-[496px] h-[39px] ">
                      <input className="lg:w-[496px] rounded-tr-none rounded-br-none  rounded-lg px-[18px]
                     " type="text" placeholder="Enter email here" />

                      <Button customClass="text-white lg:w-[156px] px-[13px] h-[39px]  
                    rounded-l-none " title={"Get started"} />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TryIt