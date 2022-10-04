import React from 'react'
import './meet.scss'
import { meetdata } from './meetdata'
import axios from 'axios'
const Meet = () => {

  const options = {
    method: 'GET',
    url: 'https://movies-app1.p.rapidapi.com/api/genres',
    headers: {
      'X-RapidAPI-Key': 'b0df475a01msh96b286db10342ebp12c946jsnefb8bc0d71c6',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
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