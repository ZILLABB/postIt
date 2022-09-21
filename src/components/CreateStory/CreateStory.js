import React from 'react'
import Input from './Input.js'
import BaseLayout from '../../Layout/BaseLayout'



const CreateStory = () => {
    return (
        <div>
            <BaseLayout accountHeader={true}>
                <Input />
            </BaseLayout>
        </div>
    )
}

export default CreateStory