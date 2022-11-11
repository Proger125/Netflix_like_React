import React from 'react';
import Movie from './Movie';

const movies = [
  {
    id: '1',
    name: 'Pulp Fiction',
    movieCreationDate: '2004-01-01',
    movieGenres: 'Action & Adventure',
    img: 'pulp_fiction.png',
  },
  {
    id: '2',
    name: 'Bohemian Rhapsody',
    movieCreationDate: '2003-01-01',
    movieGenres: 'Drama, Biography, Music',
    img: 'bohemian_rhapsody.png',
  },
  {
    id: '3',
    name: 'Kill Bill: Vol 2',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Oscar winning movie',
    img: 'kill_bill.png',
  },
  {
    id: '4',
    name: 'Avengers: War of Infinity',
    movieCreationDate: '2004-01-01',
    movieGenres: 'Action & Adventure',
    img: 'avengers_war_of_infinity.png',
  },
  {
    id: '5',
    name: 'Inception',
    movieCreationDate: '2003-01-01',
    movieGenres: 'Action & Adventure',
    img: 'inception.png',
  },
  {
    id: '6',
    name: 'Reservoir Dogs',
    movieCreationDate: '1994-01-01',
    img: 'reservoir_dogs.png',
  },
];
export default function Movies() {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}
