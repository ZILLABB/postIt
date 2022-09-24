import React from 'react'
import BaseLayout from '../../Layout/BaseLayout'
import Banner from './Banner'
import Blog from './Blog'
import TryIt from './TryIt'

const Home = () => {
  return (
      <div>
          <BaseLayout homeHeader={true}>
              <Banner />
               <Blog />
              <TryIt/> 
          </BaseLayout>
    </div>
  )
}

export default Home