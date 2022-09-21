import React from 'react'
import Footer from './Footer'
import Header from './Header'
import NextHeader from './NextHeader';

const BaseLayout = ({ children, homeHeader, accountHeader }) => {

    return (
        <div>
            {homeHeader && <Header />}
            {accountHeader && <NextHeader />  }
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default BaseLayout