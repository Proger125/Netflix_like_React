import React from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import Logo from './Logo';
import SearchBar from './search/SearchBar';
import BackToSearch from './BackToSearch';
import MoviePreview from './MoviePreview';

export default function Header(props) {
  const { selectedMovie } = props;
  return (
    <div className="header">
      <Logo />
      <HeaderContent selectedMovie={selectedMovie} />
    </div>
  );
}

function HeaderContent(props) {
  const { selectedMovie } = props;
  if (selectedMovie) {
    return (
      <>
        <BackToSearch />
        <MoviePreview movie={selectedMovie} />
      </>
    );
  }
  return (
    <>
      <AddMovie />
      <SearchBar />
    </>
  );
}

Header.propTypes = {
  selectedMovie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
  }),
};

Header.defaultProps = {
  selectedMovie: {
    img: 'default.png',
    name: 'Movie name',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Nice movie',
  },
};

HeaderContent.propTypes = {
  selectedMovie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    movieCreationDate: PropTypes.string.isRequired,
    movieGenres: PropTypes.string,
  }),
};

HeaderContent.defaultProps = {
  selectedMovie: {
    img: 'default.png',
    name: 'Movie name',
    movieCreationDate: '1994-01-01',
    movieGenres: 'Nice movie',
  },
};
