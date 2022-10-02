import React from 'react'
import './interests.scss'

const Interests = () => {
  return (
    <div className='interests'>
        <span className="create">Create your holiday activity</span>
        <span className="hi">Hi! What are your holiday interests?</span>
        <div className="search">
            <input type="text" className='enter' placeholder='Enter your insterests' />
            <button className="search1">Search partners</button>
        </div>
    </div>
  )
}

export default Interests