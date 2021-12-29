const apiKey = '7de52c87a7b2b9e263d7b276d69684fd';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${apiKey}&languages=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${apiKey}&with_genres=37`,
    fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentraries:`/discover/movie?api_key=${apiKey}&with_genres=99`
}

export default requests;