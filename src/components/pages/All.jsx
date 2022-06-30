import React from 'react'
import '../styles/All.css'
import Nav from '../Nav'
import { motion } from 'framer-motion'

const All = ({netflix,prime,hulu,disney,hbo,apple,mubi}) => {
  

  console.log(netflix)
  return (
    <div className='all'>
    <Nav />
    <div className="all_gradient"></div>
    <motion.div
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration:2, type: 'tween' }}
    >
<div className="row__posters">
    {/* {netflix.map(movie => (
           <>
           <motion.img
            whileInView={{ opacity: [0, 1] }}
              whileTap={{opacity:[0,1]}}
              transition={{ duration: 1, type: 'tween' }}
              key={movie.id}
              className={`row__poster  row__posterLarge`}
              src={`${movie.backdropPath}`}
              alt={movie.name} />
           </>
          )
        )} */}
        
  </div>

    </motion.div>
    </div>
  )
}

export default All

