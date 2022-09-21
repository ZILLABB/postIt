import React from 'react'
import vec1 from '../../Images/Vector.svg'
import vec2 from '../../Images/Vector-1.svg'
import vec3 from '../../Images/Vector-2.svg'


const LastArticle = () => {
    return (
        <div className='lg:px-[100px] px-5  '>
            <article className='mb-[66px]'>
                Blandit in amet nisl ultrices vitae sit volutpat. Et urna, ullamcorper sapien, ut at nibh suscipit tincidunt ac. Et malesuada justo id massa. Eu, morbi convallis egestas egestas vel at ipsum. Ultrices viverra augue praesent massa, cursus arcu, sit in suscipit. Nunc blandit eget lobortis non vestibulum egestas lacinia ut. <br /> <br />
                Aliquet lorem tristique eros, neque, eros, amet urna integer ornare. Et faucibus tristique quis viverra. Bibendum sit nibh cursus eu. Adipiscing elit ultrices faucibus neque nullam. Pharetra, enim ornare scelerisque id fermentum proin egestas tristique. Amet, tempor aliquet ac eu. Amet, tellus, integer enim leo risus nisl. Aliquet amet, est mi tristique tempus nisl tellus morbi massa. Pharetra libero viverra nullam eget eu, vel nam at aliquam. Dui bibendum accumsan orci sit.
            </article>
            <div className='flex gap-[34.17px] mb-[108px] '>
                <p>
                    share post;
                </p>
                <img className='' src={vec1} alt="" />
                <img className='bg-[#395185]' src={vec2} alt="" />
                <img className='' src={vec3} alt="" />
            </div>
        </div>
    )
}

export default LastArticle