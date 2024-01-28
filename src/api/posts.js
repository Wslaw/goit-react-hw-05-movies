import axios from "axios";

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

const API_KEY = 'a5e80a241b45048d42e42bcf67dfe2f1';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3?',
});

export const getAllPosts = async () => {
    try {
        const response = await instance.get(`/trending?api_key=${API_KEY}`)
        return response.data;

    } catch (error) {
        throw error
    }
};

export const searchMovies = async (query) => {
    try {
        const response = await instance.get(`/search/search-movies?api_key=${API_KEY}`);
        return response.data;
    } catch (error) {
        throw error
    }
}