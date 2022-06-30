import React, { useState } from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import Row from '../Row'
import requests from '../../requests'
import LoadingBar from 'react-top-loading-bar'


const NewPopular = () => {
    const [progress, setProgress] = useState(0);

  return (
    <div className='tvShow'>
    <Nav />
    <LoadingBar
      color='red'
      progress={progress}
      />
      <Banner entertainmentType="" />

      <Row title="New Movies" fetchUrl={requests.fetchBestOf2022} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="New Show's" fetchUrl={requests.fetchTopDrama2022} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
    </div>
  )
}

export default NewPopular