import axios from 'axios';

async function getMovies(genreParam, searchQuery, sortBy) {
  return axios
    .get('http://localhost:4000/movies', {
      params: {
        filter: genreParam,
        sortBy,
        sortOrder: 'asc',
        search: searchQuery,
        searchBy: 'title',
      },
    })
    .then((response) => response.data.data);
}

export async function getMovieById(movieId) {
  return axios
    .get(`http://localhost:4000/movies/${movieId}`)
    .then((response) => response.data);
}

export default async function searchMovies(genre, sortBy, search) {
  if (sortBy === null) {
    sortBy = 'release_date';
  }
  if (genre === 'All' || genre === null) {
    genre = '';
  }
  if (search === undefined) {
    search = '';
  }
  const movies = await getMovies(genre, search, sortBy);
  return movies;
}
