import React from 'react'
import BaseLayout from '../../Layout/BaseLayout'
import Article from './Article'
import FirstBanner from './FirstBanner'
import LastArticle from './LastArticle'
import NextArticle from './NextArticle'

const ViewPost = () => {
    return (
        <div>
            <BaseLayout accountHeader={true}>
                <FirstBanner />
                <Article />
                <NextArticle />
                <LastArticle/>
            </BaseLayout> 
        </div>
    )
}

export default ViewPost