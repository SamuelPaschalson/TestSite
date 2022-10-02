import React from 'react'
const API_IMG="https://image.tmdb.org/t/p/w500/";
import './data.scss'
const Data = ({poster_path, title, id, overview}) => {
  return (
    <div className='step'>
      <button className="step-span1">Step 1</button>
      <span className="seo">{title}</span>
      <span className="quis">{overview.substring(0,90)}...</span>
      <img src={API_IMG+poster_path} alt="" className="step1img" />
    </div>
    
  )
}

export default Data