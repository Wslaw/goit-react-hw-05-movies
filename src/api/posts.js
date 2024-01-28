

// **********************************************************
// import axios from "axios";
// const API_KEY = 'a5e80a241b45048d42e42bcf67dfe2f1';

// const instance = axios.create({
//       baseURL: 'https://api.themoviedb.org/3/',
//     });
    
//     export const getAllPosts = async () => {
//             try {
//                     const response = await instance.get(
//                           `trending/movie?language=en-US&api_key=${API_KEY}`
//                         );
//                         return response.data;
                
//                     } catch (error) {
//                             throw error
//                         }
//                     };
                    
//                     export const searchMovies = async (query) => {
//                             try {
//                                     const response = await instance.get(`/search/search-movies?api_key=${API_KEY}`);
//                                     return response.data;
//                                 } catch (error) {
//                                         throw error
//     }
// }

// **********************************************************************
const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU4MGEyNDFiNDUwNDhkNDJlNDJiY2Y2N2RmZTJmMSIsInN1YiI6IjY1YjIzYWQ2MWM2MzI5MDE2YjkzNzEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gd4mEIgWpUi3bRcFuw-y7GZqV-k0Ih9aL4xWWzG33o',

  },
};

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Error data');
    }
    const data = await response.json();
      return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

