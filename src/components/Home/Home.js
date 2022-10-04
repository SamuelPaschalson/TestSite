import React from 'react'
import { Footer } from '../Footer/Footer'
import Header from '../Header/Header'
import Idea from '../Idea/Idea'
import Interests from '../Interests/Interests'
import Meet from '../Meet/Meet'
import Works from '../Works/Works'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Works/>
        {/* <Meet/> */}
        <Idea/>
        <Interests/>
        <Footer/>
    </div>
  )
}

export default Home