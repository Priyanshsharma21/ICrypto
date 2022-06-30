import React, { useEffect, useState } from 'react'
import './styles/Banner.css'
import axios from '../axios'
import requests from '../requests'
import {useNavigate, Link} from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from 'framer-motion';





const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
     const fetchData = async ()=>{
        const request = await axios.get(requests.fetchNetflixOriginals)
        const randomMovie =  Math.floor(Math.random() * request.data.results.length - 1)
        setMovie(request.data.results[randomMovie])
        return request
     }
     fetchData()

    }, [])
    
    const trunk = (string,n)=>{
        return string?.length> n ? string.substring(0,n-1) + '...':string;
    }


  return (
   <motion.div
   whileInView={{ opacity: [0, 1] }}
    whileTap={{opacity:[0,1]}}
    transition={{ duration: 2, type: 'tween' }}
   >
     <header
     className='banner'
     style={{
        backgroundSize : "cover",
        backgroundPosition:"center center",
        backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
     }}
     >



    <div className="banner__contents">
    
    
    
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.orignal_name}</h1>

        <h1 className="banner__description">
          {trunk(movie?.overview, 150)}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <Link to='/mylist'><button className='banner__button'> My List</button></Link>
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
   </motion.div>
  )
}

export default Banner