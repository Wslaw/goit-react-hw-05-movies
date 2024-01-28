
// const instance = axios.create({
    //     baseURL: "https://jsonplaceholder.typicode.com/posts",
    
    // })
    
    // export const getAllPosts = ()=> {
        //     return instance.get("/");
        // }
        
        // export const searchPosts = (q, _page = 1) => {
            //     // return instance.get(`/?q=${q}&_limit=6&_page=${_page}`)
            //     return instance.get("/", {
                //         params: {
//             q,
//             _limit: 6,
//             _page,
//         }
//     })
// }
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
// *******************************************************************
// const API_KEY = 'a5e80a241b45048d42e42bcf67dfe2f1';
// export const getAllMovies = require('node-fetch');

// const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU4MGEyNDFiNDUwNDhkNDJlNDJiY2Y2N2RmZTJmMSIsInN1YiI6IjY1YjIzYWQ2MWM2MzI5MDE2YjkzNzEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gd4mEIgWpUi3bRcFuw-y7GZqV-k0Ih9aL4xWWzG33o',
//   },
// };

// getAllMovies(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
// **********************************************************************
const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
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
      throw new Error('Ошибка получения данных');
    }
    const data = await response.json();
      return data;
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
    throw error;
  }
};
// ********************************
// let fetch;
// if (typeof window === 'undefined') {
//   // Если код выполняется в среде Node.js
//   fetch = require('node-fetch');
// } else {
//   // Если код выполняется в браузере
//   fetch = window.fetch;
// }

// const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU4MGEyNDFiNDUwNDhkNDJlNDJiY2Y2N2RmZTJmMSIsInN1YiI6IjY1YjIzYWQ2MWM2MzI5MDE2YjkzNzEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gd4mEIgWpUi3bRcFuw-y7GZqV-k0Ih9aL4xWWzG33o',
//   },
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
