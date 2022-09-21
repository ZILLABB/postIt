import React from 'react'
import BaseLayout from '../../Layout/BaseLayout'
import WelcomeBanner from './WelcomeBanner'

const Welcome = () => {
    return (
        <div>
            <BaseLayout accountHeader={true}>
                <WelcomeBanner/>   
            </BaseLayout>
        </div>
    )
}

export default Welcome