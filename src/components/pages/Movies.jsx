import React, { useState } from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import Row from '../Row'
import requests from '../../requests'
import LoadingBar from 'react-top-loading-bar'


const Movies = () => {
    const [progress, setProgress] = useState(0);

  return (
    <div className='tvShow'>
    <Nav />
    <LoadingBar
      color='red'
      progress={progress}
      />
      <Banner entertainmentType="" />

      <Row title="Kid's & Family" fetchUrl={requests.fetchKidsMovie} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Best Of RDJ" fetchUrl={requests.fetchBestOfRDJ} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Best Of Zendaya" fetchUrl={requests.fetchBestOfZendaya} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Best Of Dwayne Johnson" fetchUrl={requests.fetchBestOfRock} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2022 Best" fetchUrl={requests.fetchBestOf2022} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2021 Best" fetchUrl={requests.fetchBestOf2021} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2020 Best" fetchUrl={requests.fetchBestOf2020} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>

    </div>
  )
}

export default Movies