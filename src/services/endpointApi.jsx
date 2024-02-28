import axios from 'axios';

// Default
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '6f0a7e90748cec36ca14cbe73d2c8153',
};

// Cast
export function getCast(movieId) {
  return axios.get(`/movie/${movieId}/credits`);
}

// Reviews
export function getReviews(movieId) {
  return axios.get(`/movie/${movieId}/reviews`);
}

// Movies
export function searchMovies(searchQuery) {
  return axios.get(`/search/movie`, { params: { query: searchQuery } });
}
// Movie details
export function getMovieDetails(movieId) {
  return axios.get(`/movie/${movieId}`);
}

// Home
export function getHomepageMovies() {
  return axios.get('/trending/movie/day');
}
