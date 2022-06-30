const  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '9b4e8da4e0msh4e8f304113b52e5p1e2beajsn9ca950eddec5',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };

const req = {

    fetchNetfixM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`,
    fetchPrimeM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=movie&genre=18&page=1&output_language=en&language=en`,
    fetchHuluM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=movie&genre=18&page=1&output_language=en&language=en`,
    fetchMubiM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=mubi&type=movie&genre=18&page=1&output_language=en&language=en`,
    fetchDisneyM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=disney&type=movie&genre=18&page=1&output_language=en&language=en`,
    fetchHboM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hbo&type=movie&genre=18&page=1&output_language=en&language=en`,
    fetchAppleM : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=apple&type=movie&genre=18&page=1&output_language=en&language=en`,

    fetchNetfixS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=series&genre=18&page=1&output_language=en&language=en`,
    fetchPrimeS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=prime&type=series&genre=18&page=1&output_language=en&language=en`,
    fetchHuluS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hulu&type=series&genre=18&page=1&output_language=en&language=en`,
    fetchMubiS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=mubi&type=series&genre=18&page=1&output_language=en&language=en`,
    fetchDisneyS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=disney&type=series&genre=18&page=1&output_language=en&language=en`,
    fetchHboS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=hbo&type=series&genre=18&page=1&output_language=en&language=en`,
    fetchAppleS : `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=apple&type=series&genre=18&page=1&output_language=en&language=en`,
  
}


export default req
export {options}