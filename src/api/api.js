// const fetch = require('node-fetch');

// const API_KEY =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU4MGEyNDFiNDUwNDhkNDJlNDJiY2Y2N2RmZTJmMSIsInN1YiI6IjY1YjIzYWQ2MWM2MzI5MDE2YjkzNzEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gd4mEIgWpUi3bRcFuw-y7GZqV-k0Ih9aL4xWWzG33o';

// const fetchWithApiKey = async url => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_KEY}`,
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error('Error fetching data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error.message);
//     throw error;
//   }
// };

// export const getMoviesById = async id => {
//   const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
//   return fetchWithApiKey(url);
// };

// export const getTrendingMovies = async () => {
//   const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
//   return fetchWithApiKey(url);
// };

// export const getMovieCredits = async id => {
//   const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
//   return fetchWithApiKey(url);
// };

// export const getMovieReviews = async id => {
//   const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
//   return fetchWithApiKey(url);
// };
// ***************************************************************************************
// import axios from 'axios';
// const API_KEY = 'a5e80a241b45048d42e42bcf67dfe2f1';
// const instance = axios.create({
//   BASE_URL: 'https://api.themoviedb.org/3',
// });

// export const getTrendingMovies = () => {
//   return instance.get(`/trending/movie/all/day?api_key=${API_KEY}`);
// };

// export const getMoviesById = id => {
//   return instance.get(`/movie/${id}?api_key=${API_KEY}`);
// };

// export const getMovieCredits = id => {
//   return instance.get(`/movie/${id}/credits?api_key=${API_KEY}`);
// };

// export const getMovieReviews = id => {
//   return instance.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
// };

// export const getSearchMovies = (q, page = 1) => {
//   return instance.get(
//     `/search/movie?query=${q}}&api_key=${API_KEY}&include_adult=true&page=${page}`
//   );
// };
// ************************************************************************
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


export const getSearchMovies = async search => {
  const movies = instance.get(
    `search/movie?include_adult=false&language=en-US&page=1&query=${search}`
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
