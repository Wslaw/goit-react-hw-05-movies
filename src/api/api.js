
import axios from 'axios';

const API_KEY = 'a5e80a241b45048d42e42bcf67dfe2f1';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  params: {
    api_key: `${API_KEY}`,
  },
});


export const getTrendingMovies = () => {
  return instance.get('trending/movie/day');
};


export const getMoviesById = async id => {
  const movies = instance.get(`movie/${id}?language=en-US`);
  return movies;
};


export const getSearchMovies = async (search, page) => {
  const movies = instance.get(
    // `search/movie?include_adult=false&language=en-US&page=1&query=${search}`
    `/search/movie?query=${search}}&include_adult=false&page=${page}&language=en-US`
  );
  return movies;
};


export const getMovieCredits = async id => {
  const movies = instance.get(`movie/${id}/credits?language=en-US`);
  return movies;
};


export const getMovieReviews = async id => {
  const movies = instance.get(`movie/${id}/reviews?language=en-US&page=1`);
  return movies;
};
