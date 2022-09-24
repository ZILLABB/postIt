import React from 'react'
import { storyList } from './StoryList'


const NextP = () => {
    return (
      <div className="lg:px-[100px] p-[20px] text-start  ">
        {storyList.map((story, index) => (
          <div key={index} className="lg:flex lg:justify-evenly ">
            <div>
              <div className="text-[28.2024px] mb-5  ">{story.title}</div>
              <div className="lg:w-[816.3px] mb-5 ">{story.article}</div>
            </div>

            <div className="flex gap-[23.4px] mb-5 ">
              {story.button.button1}
              <div className=''>{story.button.button2}</div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default NextP