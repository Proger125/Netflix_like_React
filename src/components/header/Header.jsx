import React from 'react';
import { useSelector } from 'react-redux';
import AddMovie from './AddMovie';
import Logo from './Logo';
import SearchBar from './search/SearchBar';
import BackToSearch from './BackToSearch';
import MoviePreview from './MoviePreview';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <HeaderContent />
    </div>
  );
}

function HeaderContent() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  if (selectedMovie) {
    return (
      <>
        <BackToSearch />
        <MoviePreview />
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
