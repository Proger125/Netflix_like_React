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

async function getMovieById(movieId) {
  return axios
    .get(`http://localhost:4000/movies/${movieId}`)
    .then((response) => response.data);
}

export default async function movieDefaultLoader({ request, params }) {
  let { searchQuery } = params;
  const url = new URL(request.url);
  let genreParam = url.searchParams.get('genre');
  let sortBy = url.searchParams.get('sortBy');
  const movieId = url.searchParams.get('movieId');
  let movie = null;
  if (movieId !== null) {
    movie = await getMovieById(movieId);
  }
  if (sortBy === null) {
    sortBy = 'release_date';
  }
  if (genreParam === 'All' || genreParam === null) {
    genreParam = '';
  }
  if (searchQuery === undefined) {
    searchQuery = '';
  }
  const movies = await getMovies(genreParam, searchQuery, sortBy);
  if (genreParam === '') {
    genreParam = 'All';
  }
  return { movies, genreParam, sortBy, searchQuery, movie };
}
