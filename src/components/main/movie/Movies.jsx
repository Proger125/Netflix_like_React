import React from 'react';
import Movie from './Movie';

const movies = [
  {
    name: 'Pulp Fiction',
    movieCreationDate: '2004-01-01',
    movieGenres: 'Action & Adventure',
    img: 'pulp_fiction.png',
  },
  {
    name: 'Bohemian Rhapsody',
    movieCreationDate: '2003-01-01',
    movieGenres: 'Drama, Biography, Music',
    img: 'bohemian_rhapsody.png',
  },
  {
    name: 'Kill Bill: Vol 2',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Oscar winning movie',
    img: 'kill_bill.png',
  },
  {
    name: 'Avengers: War of Infinity',
    movieCreationDate: '2004-01-01',
    movieGenres: 'Action & Adventure',
    img: 'avengers_war_of_infinity.png',
  },
  {
    name: 'Inception',
    movieCreationDate: '2003-01-01',
    movieGenres: 'Action & Adventure',
    img: 'inception.png',
  },
  {
    name: 'Reservoir Dogs',
    movieCreationDate: '1994-01-01',
    img: 'reservoir_dogs.png',
  },
];
export default class Movies extends React.Component {
  render() {
    return (
      <div className="movies">
        {movies.map(movie => (
          <Movie movie={movie} />
        ))}
      </div>
    );
  }
}