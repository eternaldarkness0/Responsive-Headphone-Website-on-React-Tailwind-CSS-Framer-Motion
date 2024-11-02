import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import { Main } from './components/Main/Main'
import { Services } from './components/Services/Services'
import { Banner } from './components/Banner/Banner'
import { BannerText } from './components/Banner/BannerText'
import { Blogs } from './components/Blogs/Blogs'
import { Footer } from './components/Footer/Footer'

export const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}
      >
      <Navbar/>
      <Main/>
      </UpdateFollower>
      <UpdateFollower
      mouseOptions={{
        backgroundColor: 'black',
        zIndex: 999,
        followSpeed: 1.5,
      }}
      >
      <Services/>
      <Banner/>
      <BannerText/>
      <Blogs/>
      <Footer/>
      </UpdateFollower>
    </div>
  )
}
