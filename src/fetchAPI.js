const API_KEY = '457f80f59e5c5ed289022502f172a9f5';

// Приклад https://api.themoviedb.org/3/movie/550?api_key=457f80f59e5c5ed289022502f172a9f5

// Робота с backend

export async function fetchTrending() {
  return await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.results;
    });
}

export async function fetchFilteredMovies(query) {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.results;
    });
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
      console.log(data);
      return data;
    });
}

