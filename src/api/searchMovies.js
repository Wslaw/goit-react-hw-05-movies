const fetch = require('node-fetch');




export const getMoviesById = async (movieId) => {
    console.log(movieId);
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;



const options = {
method: 'GET',
headers: {
 accept: 'application/json',
 Authorization:
   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWU4MGEyNDFiNDUwNDhkNDJlNDJiY2Y2N2RmZTJmMSIsInN1YiI6IjY1YjIzYWQ2MWM2MzI5MDE2YjkzNzEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gd4mEIgWpUi3bRcFuw-y7GZqV-k0Ih9aL4xWWzG33o',
},
};
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const data = await response.json();
        console.log("DATA = ",data);
        return data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};
