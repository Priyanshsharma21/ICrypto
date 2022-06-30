import React, { useState, useEffect } from 'react'
import './styles/Row.css'
import axios from '../axios'
import requests from '../requests'
import Youtube from 'react-youtube'
import Movie_Trailer from 'movie-trailer'
import { motion } from 'framer-motion';
import MyList from './pages/Search'
import { useAlert } from 'react-alert'


const Row = ({title,fetchUrl,isLargeRow,setProgress}) => {
    const alert = useAlert()
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    const base_url = 'https://image.tmdb.org/t/p/original/'
//get movie posters
    useEffect(()=>{
        const fetchData = async()=>{
            setProgress(50)
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            setProgress(100)
            return request;
        }
        fetchData();
    },[fetchUrl])


  //get movie trailer
  const options = {
    height: '700',
    width: '1590',
    playerVars: {
      autoplay: 1,
    },
  };

// show movie trailer 
const showMovieTrailer = (movie)=>{
  if(trailerUrl){
    setTrailerUrl("")
  }else{
    // https://www.youtube.com/watch?v=tSqqygm_JyA
    setProgress(30)
    Movie_Trailer(`${movie?.original_title}` || "")
    .then((url)=>{
      const urlParam = new URLSearchParams(new URL(url).search); // this will gives us the y-t video id
      setProgress(70)
      setTrailerUrl(urlParam.get('v'));
      setProgress(100)
    }).catch(err=>{alert.show('Cant Chill, Soory No Trailer For This Movie/Series')})

  }

}

    


console.log(movies)




  return (
    <div className='row'>
    <h2 className='title'>{title}</h2>

    <div className="row__posters">
    {movies.map(movie => (
          ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (

           <>
           <motion.img
            whileInView={{ opacity: [0, 1] }}
              whileTap={{opacity:[0,1]}}
              transition={{ duration: 1, type: 'tween' }}
              key={movie.id}
              onClick={()=>showMovieTrailer(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name} /> 

              {/* <motion.div
               whileInView={{ opacity: [0, 1] }}
              whileTap={{opacity:[0,1]}}
              transition={{ duration: 0.5, type: 'tween' }} 
              className="row__Add">
                <button className='btn_red' onClick={(movie)=>{<MyList  imageUrl={movie.poster_path} name={movie.overview}/>}}>+</button>
              </motion.div> */}
              
           </>
          )
        )
        )
        }
    </div>
    

   {trailerUrl && (
    <motion.div
     whileInView={{ opacity: [0, 1] }}
    transition={{ duration:2, type: 'tween' }}
     className="row__trailer">
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options}/>}
    </motion.div>
 
    
    
   )}

    </div>
  )
}

export default Row