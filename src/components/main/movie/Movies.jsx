import React from 'react';
import Movie from './Movie';

const movies = [
  {
    id: '1',
    name: 'Pulp Fiction',
    movieCreationDate: '2004-01-01',
    movieGenres: 'Action & Adventure',
    img: 'pulp_fiction.png',
    rating: 7.8,
    duration: '2h34mn',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: '2',
    name: 'Bohemian Rhapsody',
    movieCreationDate: '2003-01-01',
    movieGenres: 'Drama, Biography, Music',
    img: 'bohemian_rhapsody.png',
    rating: 7.8,
    duration: '2h34mn',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: '3',
    name: 'Kill Bill: Vol 2',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Oscar winning movie',
    img: 'kill_bill.png',
    rating: 7.8,
    duration: '2h34mn',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: '4',
    name: 'Avengers: War of Infinity',
    movieCreationDate: '2004-01-01',
    movieGenres: 'Action & Adventure',
    img: 'avengers_war_of_infinity.png',
    rating: 7.8,
    duration: '2h34mn',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: '5',
    name: 'Inception',
    movieCreationDate: '2003-01-01',
    movieGenres: 'Action & Adventure',
    img: 'inception.png',
    rating: 7.8,
    duration: '2h34mn',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  },
  {
    id: '6',
    name: 'Reservoir Dogs',
    movieCreationDate: '1994-01-01',
    img: 'reservoir_dogs.png',
    rating: 7.8,
    duration: '2h34mn',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
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
