import React from 'react'
import coffee from "../../Images/Rectangle 3.png";
import Button from "../Atoms/Button";

const Banner = () => {
    return (
        <div>
            <section className="relative ">
                <img src={coffee} alt="coffeePicture" />
                <div className="absolute px-2 lg:px-0 pb-2
                top-2 lg:mt-[220px] lg:mb-[28px] lg:mx-[100px] ">
                    <h1 className="font-bold lg:text-[50px] text-[20px] lg:mb-[28px] mb-2">
                        Stay Curious
                    </h1>
                    <article className=" lg:w-[450px] lg:h-[105px] lg:mb-[26px] mb-0">
                        Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur  egestas
                        massa velit aliquam. Molestim bibendum  hnt ipsum orci, platea
                        aliquam id ut.
                    </article>
                    <Button customClass="text-white mt-2 mb-4" title={"Get Started"} />
                </div>
            </section>
        </div>
    )
}

export default Banner