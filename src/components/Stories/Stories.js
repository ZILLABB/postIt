import React from 'react'
import BaseLayout from '../../Layout/BaseLayout'
import BannerStory from './BannerStory'
import StoryList from './StoryList'

const Stories = () => {
    return (
        <div>
            <BaseLayout accountHeader={true}>
                <BannerStory />
                <StoryList/>
            </BaseLayout>
        </div>
    )
}

export default Stories