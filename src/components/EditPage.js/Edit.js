import React from 'react'
import BaseLayout from '../../Layout/BaseLayout'
import EditStory from './EditStory'

const Edit = () => {
    return (
        <div>
            <BaseLayout accountHeader={true}>
            <EditStory/>
            </BaseLayout>
        </div>
    )
}

export default Edit