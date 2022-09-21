import React from 'react'
import BaseLayout from '../../Layout/BaseLayout'
import FirstPart from './FirstPart'
import NextP from './NextP'

const MyStories = () => {
    return (
        <div>
            <BaseLayout accountHeader={true}>
                <FirstPart />
                <NextP/>
            </BaseLayout>
        </div>
    )
}

export default MyStories