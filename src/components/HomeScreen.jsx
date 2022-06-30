import React, { useState } from 'react'
import Nav from './Nav'
import './styles/HomeScreen.css'
import Banner from './Banner'
import requests from '../requests'
import LoadingBar from 'react-top-loading-bar'
import Row from './Row'
import Footer from './Footer'



const HomeScreen = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className='homeScreen'>
      <Nav />
      <LoadingBar
      color='red'
      progress={progress}
      />
      <Banner entertainmentType={requests.fetchNetflixOriginals}/>

      <Row title="Treanding Now" fetchUrl={requests.fetchTrending} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} setProgress={(progress)=>{setProgress(progress)}} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Documantaries" fetchUrl={requests.fetchDocumantaries} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Top Drama" fetchUrl={requests.fetchDrama} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Best Drama's" fetchUrl={requests.fetchAllTimeDrama} setProgress={(progress)=>{setProgress(progress)}}/>

      {/* <Footer /> */}
    </div>
  )
}

export default HomeScreen