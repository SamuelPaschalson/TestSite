import React from 'react'
import './idea.scss'
import sport from '../../assets/Object.png'
import health from '../../assets/Object (1).png'
import extreme from '../../assets/Object (2).png'
import games from '../../assets/Object (3).png'
import culture from '../../assets/Object (4).png'
import culture1 from '../../assets/Object (5).png'
import travel from '../../assets/Object (6).png'
const Idea = () => {
  return (
    <div className='idea'>
        <span className="discover">Discover holiday activity ideas</span>
        <div className="sport">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={sport} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Sports and Activis</span>
        </div>
        <div className="health">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={health} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Wellness and Health</span>
        </div>
        <div className="extreme">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={extreme} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Extreme Sports and Expeditions</span>
        </div>
        <div className="games">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={games} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Games</span>
        </div>
        <div className="culture">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={culture} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Culture and Education</span>
        </div>
        <div className="culture1">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={culture1} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Enjoyment and Relaxation</span>
        </div>
        <div className="travel">
            <span className="sport-m"></span>
            <span className="sport-m2"></span>
            <img src={travel} alt="" className="img-sport" />
            <span className="sport-m1"></span>
            <span className="sport-span">Travelling</span>
        </div>
    </div>
  )
}

export default Idea