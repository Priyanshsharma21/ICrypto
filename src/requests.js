const API_KEY = '726f92e1f400054de4c2b4b7a406470a'


const requests = {

    //All
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

    // movies 
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchKidsMovie : `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc `,
    fetchBestOf2022 : `/discover/movie?api_key=${API_KEY}&primary_release_year=2022&sort_by=vote_average.desc`,
    fetchBestOf2021 : `/discover/movie?api_key=${API_KEY}&primary_release_year=2021&sort_by=vote_average.desc`,
    fetchBestOf2020 : `/discover/movie?api_key=${API_KEY}&primary_release_year=2020&sort_by=vote_average.desc`,
    fetchBestOfRDJ : `/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=3223&sort_by=vote_average.desc`,
    fetchBestOfRock : `/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=18918&sort_by=vote_average.desc`,
    fetchBestOfZendaya : `/discover/movie?api_key=${API_KEY}&with_genres=878&with_cast=505710&sort_by=vote_average.desc`,
    // documntary 
    fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorrorSeries: `/discover/tv?api_key=${API_KEY}&with_networks=214`,
    fetchInTheater: ` /discover/movie?api_key=${API_KEY}&primary_release_date.gte=2022-06-01&primary_release_date.lte=2022-06-26`,
   
    
    
    // drama 
    fetchDrama:  `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`,
    fetchAllTimeDrama : `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`,
    fetchTopDrama2022 : `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2022`,
    fetchTopDrama2021 : `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2021`,
    fetchTopDrama2020 : `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2020`,
    fetchTopDrama2019 : `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2019`,
    fetchTopDrama2018 : `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2018`,
  
  }


export default requests
