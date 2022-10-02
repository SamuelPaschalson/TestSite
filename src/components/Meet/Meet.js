import React from 'react'
import './meet.scss'
import { meetdata } from './meetdata'
const Meet = () => {
  return (
    <div className='meet'>
        <span className="meet-partner">Meet a partner for your best holiday</span>
        {meetdata.map((meet, index) =>
            <div className={meet.class}>
                <img className='avatar' src={meet.img_src} alt="" />
                <span className="brad">Bradley Hunter</span>
                <span className="chicago">Based in Chicago. I love playing tennis and loud music.</span>
            </div>
        )}
        <button className="see">See other partners</button>
    </div>
  )
}

export default Meet