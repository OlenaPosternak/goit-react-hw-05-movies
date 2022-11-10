import axios from 'axios'; 

const API_KEY = '457f80f59e5c5ed289022502f172a9f5';
// Робота с backend

// export async function fetchTrending() {
//   return await fetch(
//     `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
//   )
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       return data.results;
//     });
// }

export async function fetchTrending() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
}

// export async function fetchFilteredMovies(query) {
//   return await fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//   )
//     .then(response => {
//       return response.json();
//     })
//     .then(data => {
//       return data.results;
//     });
// }

export async function fetchFilteredMovies(query) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      return response.data;
    } catch (error) {
      new Error('Not Found');
    }
  }

export async function getMovieByID(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
        `
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export async function getCastByID(id) {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export async function getReviewsByID(id) {
  return await fetch(
    `
      https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}
