import React, { useState } from 'react'
import Banner from '../Banner'
import Nav from '../Nav'
import Row from '../Row'
import requests from '../../requests'
import LoadingBar from 'react-top-loading-bar'



const TVShow = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className='tvShow'>
    <Nav />
    <LoadingBar
      color='red'
      progress={progress}
      />
      <Banner entertainmentType={requests.fetchAllTimeDrama} />

      <Row title="Watch Popular Prime Drama" fetchUrl={requests.fetchDrama} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Top Apple TV Show's" fetchUrl={requests.fetchAllTimeDrama} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Horror Show's" fetchUrl={requests.fetchHorrorSeries} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="Netflix Orignal's" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2022 Top Drama's" fetchUrl={requests.fetchTopDrama2022} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2021 Top Drama's" fetchUrl={requests.fetchTopDrama2021} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2020 Top Drama's" fetchUrl={requests.fetchTopDrama2020} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2019 Top Drama's" fetchUrl={requests.fetchTopDrama2019} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>
      <Row title="2018 Top Drama's" fetchUrl={requests.fetchTopDrama2018} isLargeRow={true} setProgress={(progress)=>{setProgress(progress)}}/>

    </div>
  )
}

export default TVShow