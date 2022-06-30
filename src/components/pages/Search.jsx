import React, { useState,useRef } from 'react'
import Nav from '../Nav'
import LoadingBar from 'react-top-loading-bar'
import '../styles/MyList.css'
import { motion } from 'framer-motion';
import '../styles/Search.css'
import axios from 'axios'
import { useEffect } from 'react';
import req, {options} from './req'
import All from './All';
import {useNavigate, Link} from "react-router-dom";



const Search = () => {

  const [progress,setprogress] = useState(0);
  const [netflix, setNetflix] = useState([])
  const [prime, setPrime] = useState([])
  const [disney, setDisney] = useState([])
  const [hbo, setHbo] = useState([])
  const [apple, setApple] = useState([])
  const [mubi, setMubi] = useState([])
  const [hulu, setHulu] = useState([])

  const [catoN,setCatoN] = useState(req.fetchAppleM)
  const [catoP, setCatoP] = useState(req.fetchPrimeM)
  const [catoD, setCatoD] = useState(req.fetchDisneyM)
  const [catoH, setCatoH] = useState(req.fetchHuluM)
  const [catoA, setCatoA] = useState(req.fetchAppleM)
  const [catoHBO, setCatoHBO] = useState(req.fetchHboM)
  const [catoM, setCatoM] = useState(req.fetchMubiM)
  const navigate = useNavigate();

  
 useEffect(()=>{
  fetch(catoN, options)
	.then(res => res.json())
	.then(json => setNetflix(json))
	.catch(err => console.error('error:' + err));
 },[catoN])

 useEffect(()=>{
  fetch(catoM, options)
	.then(res => res.json())
	.then(json => setMubi(json))
	.catch(err => console.error('error:' + err));
 },[catoM])

 useEffect(()=>{
  fetch(catoP, options)
	.then(res => res.json())
	.then(json => setPrime(json))
	.catch(err => console.error('error:' + err));
 },[catoP])

 useEffect(()=>{
  fetch(catoD, options)
	.then(res => res.json())
	.then(json => setDisney(json))
	.catch(err => console.error('error:' + err));
 },[catoD])

 useEffect(()=>{
  fetch(catoH, options)
	.then(res => res.json())
	.then(json => setHulu(json))
	.catch(err => console.error('error:' + err));
 },[catoH])

 useEffect(()=>{
  fetch(catoA, options)
	.then(res => res.json())
	.then(json => setApple(json))
	.catch(err => console.error('error:' + err));
 },[catoA])

 useEffect(()=>{
  fetch(catoHBO, options)
	.then(res => res.json())
	.then(json => setHbo(json))
	.catch(err => console.error('error:' + err));
 },[catoHBO])



  
  return (
      <div className='search'>
    <Nav />
    <LoadingBar
      color='red'
      progress={progress}
      />
    <div className="search__gradient"></div>
      <motion.div
       whileInView={{ opacity: [0, 1] }}
      transition={{ duration:2, type: 'tween' }}
      >
      <div className="search__ott">
        <div className="netflix ss">
    
              <motion.img
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              whileTap={{ scale: 0.9 }}
              transition={{duration:0.5,type:'tween'}}
              onClick={()=>{
                <All key={netflix.id} netflix={netflix}/>
                navigate('/')
              }}
              src='https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0' alt="" />
      
        </div>
        <div className="prime ss ">
    
            <motion.img 
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            whileTap={{ scale: 0.9 }}
            transition={{duration:0.5,type:'tween'}}
            onClick={()=>{
            <All netflixMovie={prime}/> 
            navigate('/tvshow')}}
            src="https://logodownload.org/wp-content/uploads/2018/07/prime-video-logo-0.png" alt="" />
      
        </div>
        <div className="hulu ss">
    
              <motion.img 
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              whileTap={{ scale: 0.9 }}
              onClick={()=>{
              <All netflixMovie={hulu}/>
              navigate('/new&popular')
              }}
              transition={{duration:0.5,type:'tween'}}
              src="https://logos-download.com/wp-content/uploads/2016/10/Hulu_logo.png" alt="" />
      
        </div>
        <div className="disney ss">
    
              <motion.img
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              whileTap={{ scale: 0.9 }}
              onClick={()=>{
              <All netflixMovie={disney}/>
              navigate('/movies')
              }}
              transition={{duration:0.5,type:'tween'}}
               src="https://th.bing.com/th/id/R.d644467c98dffe7ba15fdc199fbafa59?rik=HTFaMjGepjdFzg&riu=http%3a%2f%2fblog.onsitego.com%2fwp-content%2fuploads%2f2020%2f09%2fDisney-Hotstar-Logo-1024x576.jpg&ehk=qhDA1M4q7l2V4Y8OPaKU8O4dyLp1YoafgY5n6tYx%2fKI%3d&risl=&pid=ImgRaw&r=0" alt="" />
      
        </div>
        <div className="hbo ss">
    
              <motion.img 
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              whileTap={{ scale: 0.9 }}
              onClick={()=>{
              <All netflixMovie={hbo}/>
              navigate('/new&popular')
              }}
              transition={{duration:0.5,type:'tween'}}
              src="https://th.bing.com/th/id/OIP.osscav8LjAQE2GON3SDKtAHaDZ?pid=ImgDet&rs=1" alt="" />
      
        </div>
        <div className="apple ss">
  
              <motion.img 
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              whileTap={{ scale: 0.9 }}
              onClick={()=>{
              <All netflixMovie={apple}/>
              navigate('/tvshow')
              }}
              transition={{duration:0.5,type:'tween'}}
              src="https://help.apple.com/assets/5CFFD61D094622FE662CDF38/5CFFD61F094622FE662CDF46/pl_PL/2037468105d76e80b7f29c0b22975c98.png" alt="" />
      
        </div>
        <div className="mubi ss">
    
              <motion.img
              whileInView={{opacity:1}}
              whileHover={{scale:1.1}}
              whileTap={{ scale: 0.9 }}
              onClick={()=>{
              <All netflixMovie={mubi}/>
              navigate('/movies')
              }}
              transition={{duration:0.5,type:'tween'}}
               src="https://servicesdown.com/img/mubi-logo.png" alt="" />
      
        </div>
      </div>
      </motion.div>




  
  </div>
  )
}

export default Search