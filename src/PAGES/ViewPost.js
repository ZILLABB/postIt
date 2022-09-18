import React from 'react'
import postIt from './Images/Postit 1.png'
import ellipse from './Images/Ellipse 1.png'
import Button from './Button'
import rec9 from './Images/Rectangle 9.svg'
import rec137 from './Images/Rectangle 137.svg'
import vec1 from './Images/Vector.svg'
import vec2 from './Images/Vector-1.svg'
import vec3 from './Images/Vector-2.svg'
import Footer from './Footer'


const ViewPost = () => {
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
            <div className='px-[100px] '>
                <Button customClass="text-white bg-[#6397E5] w-[130.48px] h-[37.28px] rounded-[7.76662px] mb-[20.74px] " title={"Technology"} />
                <h1 className='mb-[22.5px] text-[62.133px]'>
                    The 20 Biggest Fintech Companies In Nigeria 2022
                </h1>
                <div className='flex text-center justify-start m-[auto] gap-[17.9px] mb-[25.7px] '>
                    <img src={ellipse} alt="" />
                    <p>By Maria Davies  -  May 21, 2022</p>
                </div>
                <hr className='text-black w-[1230.23px] rounded-[1.55332px] mb-[55.92px]  ' />
                <div>
                    <img className='w-[1238px] h-[537.45px] rounded-[7.76662px] mb-[55.28px] ' src={rec9} alt="" />
                </div>
                <article className='mb-[45px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada neque, vitae arcu elit amet arcu. Non quam dignissim blandit lectus tempus sit molestie fermentum. Mattis morbi fames nullam enim. Vitae commodo tellus cras eu, amet id scelerisque quis. Massa donec accumsan, maecenas ullamcorper sagittis, ut felis, faucibus. Varius nibh tristique a mattis mattis amet in placerat. Donec ultricies pharetra turpis proin. Vulputate volutpat neque diam at metus scelerisque. <br /> <br/>
                    Imperdiet congue ultrices proin nisi. Id sagittis aenean egestas metus, aliquet dolor vitae consectetur diam. Porta aliquet cras nisl sed sed ut consequat tempus ultricies. Tellus tortor sapien, et sagittis. Convallis nunc sem purus egestas. Semper venenatis suspendisse in et, velit ultrices facilisis enim mi. Tortor quis sapien pulvinar vitae et neque curabitur velit in. <br /> <br />
                    Dictum nulla vitae vitae gravida consectetur libero arcu, id cras. Erat sed viverra auctor eget pellentesque velit. Neque nunc sit ut eu at id morbi turpis. Interdum in viverra sodales est adipiscing metus nunc. Condimentum massa tincidunt consequat mattis dui in fermentum faucibus. Faucibus non amet ornare tellus convallis urna malesuada sed. Tellus scelerisque eu, eu posuere mattis. Ac in non dui viverra mi cras nibh. Amet euismod ut nunc amet, ullamcorper eu cursus eget est. Ipsum praesent integer vestibulum lorem elit lectus. Arcu viverra dignissim adipiscing velit id arcu nunc, sit mollis. Condimentum viverra vitae, in arcu. Bibendum purus tincidunt aenean neque, iaculis quam. Sollicitudin enim, aenean commodo arcu ligula consectetur porttitor faucibus sed.
                </article>
                <div className='flex'>
                    <img className='w-[583px] h-[421px] mr-[39px] rounded-[8px] mb-[59px]' src={rec137} alt="" />
                    <div>
                        <h1 className='text-[50.13px]  '>
                            Fin tech Companies in Nigeria
                        </h1>
                        <article className=' '>
                            Ac sem pulvinar feugiat elit lobortis. At conllis <br /> gravida massa, ultricies eu. Erat ornare sed <br /> elit sed porta egestas duis. Odio phetra, arcu <br /> eros, et metus adipiscing enim, odio. Euimod <br /> cursus elementum pharetra sed cursus cotur <br /> etiam id. Fringilla phasellus vivamus in vehila <br />  aliquam molestie blandit.  Duis nibh blandit <br /> pharetra nisi leo, arcu nunc suspendisse. Vol <br /> vel ac aliquam aliquam mauris.

                        </article>

                    </div>
                </div>
                <article className='mb-[66px]'>
                    Blandit in amet nisl ultrices vitae sit volutpat. Et urna, ullamcorper sapien, ut at nibh suscipit tincidunt ac. Et malesuada justo id massa. Eu, morbi convallis egestas egestas vel at ipsum. Ultrices viverra augue praesent massa, cursus arcu, sit in suscipit. Nunc blandit eget lobortis non vestibulum egestas lacinia ut. <br /> <br />
                    Aliquet lorem tristique eros, neque, eros, amet urna integer ornare. Et faucibus tristique quis viverra. Bibendum sit nibh cursus eu. Adipiscing elit ultrices faucibus neque nullam. Pharetra, enim ornare scelerisque id fermentum proin egestas tristique. Amet, tempor aliquet ac eu. Amet, tellus, integer enim leo risus nisl. Aliquet amet, est mi tristique tempus nisl tellus morbi massa. Pharetra libero viverra nullam eget eu, vel nam at aliquam. Dui bibendum accumsan orci sit.
                </article>
                <div className='flex gap-[34.17px] mb-[108px]'>
                    <p>
                        share post;
                    </p>
                    <img className='' src={vec1} alt="" />
                    <img className='bg-[#395185]' src={vec2} alt="" />
                    <img src={vec3} alt="" />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ViewPost