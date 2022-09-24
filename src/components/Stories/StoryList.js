import React from 'react'
import { stories } from './list'

const StoryList = () => {

    return (
      <div className="lg:grid grid-cols-3 px-[30px] lg:px-[100px] gap-[51px]">
        {stories.map((story, index) => (
          <div key={index} className="">
            <div className=" ">
              <div className="mb-[26px]">
                <img className="w-full" src={story.image} alt="" />
              </div>
              <h1 className="mb-[29px] text-[22px]">{story.title}</h1>
              <div className="lg:flex mb-7 gap-[11px]">
                <img src={story.user.userImg} alt="" />
                {story.user.username}
                <p>-</p>
                {story.user.date}
              </div>
              <article className="mb-[18px]">{story.article}</article>
              <div className="flex gap-[11px] mb-[68px]">
                <img src={story.readMore.icon} alt="" />
                <p className="text-[#0086B0]">{story.readMore.Write}</p>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
}

export default StoryList