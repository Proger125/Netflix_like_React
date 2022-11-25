import React from 'react';
import PropTypes from 'prop-types';
import Genre from './Genre';

const genres = [
  'All',
  'Drama',
  'Romance',
  'Animation',
  'Adventure',
  'Family',
  'Comdedy',
  'Fantasy',
  'Science Fiction',
  'Action',
];

export default function Genres(props) {
  const { moviesGenreFilter, setMoviesGenreFilter } = props;
  return (
    <div className="genres">
      {genres.map((genre) => (
        <Genre
          key={genre}
          genre={genre}
          isSelected={genre === moviesGenreFilter}
          setMoviesGenreFilter={setMoviesGenreFilter}
        />
      ))}
    </div>
  );
}

Genres.propTypes = {
  moviesGenreFilter: PropTypes.string.isRequired,
  setMoviesGenreFilter: PropTypes.func.isRequired,
};
