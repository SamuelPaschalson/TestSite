import React from 'react'
import './footer.scss'
import areto from '../../assets/Bitmap (1).png'
export const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <span className="dream">DREAMSHARE</span>
        <span className="company">Company</span>
        <span className="about">About <br/>Contact <br/>
Press <br/>
Blog <br/>
Terms and Privacy <br />
Help</span>
        <span className="design">Designed by</span>
        <img src={areto} alt="" className="areto" />
        <div className="partner">Partners</div>
        <span className="dream">DREAMSHARE</span>
    </div>
  )
}
