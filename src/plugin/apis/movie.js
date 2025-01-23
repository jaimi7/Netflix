const API_KEY = '63ef9c1da41cd3c843dcec9ed2264b73'

const requests = {
  getTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  getDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests
