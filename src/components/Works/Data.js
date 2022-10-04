import React from 'react'
const API_IMG="https://image.tmdb.org/t/p/w500/";
import './data.scss'
const Data = ({poster_path, title, id, overview}) => {
  return (
    <div className='step'>
      <button className="step-span1">Step 1</button>
      <span className="seo">{title}</span>
      <span className="s-mask"></span>
      <span className="s-mask1"></span>
      <span className="s-mask2"></span>
      <img src={API_IMG+poster_path} alt="" className="step1img" />
      <span className="quis">{overview.substring(0,90)}...</span>
    </div>
    
  )
}

export default Data