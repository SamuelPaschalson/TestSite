import React, { useEffect, useState } from 'react'
import './works.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data'

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=2fcc0e3041ef2de02c596b0cc33cd531";

const Works = () => {

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      // console.log(data);
      setMovies(data.results.slice(0, 3));
    })
  }, [])

  return (
    <div className='works'>
        <span className="how">How Dreamshare works?</span>
        <div className="contains">
            {movies.map((movieReq)=><Data {...movieReq}/>)}
        </div>
        <button className="see">See other works</button>
    </div>
  )
}
export default Works