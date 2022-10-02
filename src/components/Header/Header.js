import React from 'react'
import './header.scss'
import background from '../../assets/Bitmap.png'
const Header = () => {
  return (
    <div className='header'>
        <div className="img">
            <span className="mask"></span>
            <span className="mask-c"></span>
            <img className='background' src={background} alt="" />
        </div>
        <span className="dream">DREAMSHARE</span>
        <span className="log">Log in</span>
        <button className="sign">Sign Up</button>
        <span className='holiday'>SHARE YOUR HOLIDAY DREAM</span>
        <span className="project">And find the perfect partner to fullfill it</span>
        <div className="button">
            <button className='partner'>Find your holiday partner</button>
        </div>
        
    </div>
  )
}

export default Header