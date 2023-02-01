import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
  const { movie } = useLoaderData();
  if (movie) {
    return (
      <>
        <BackToSearch />
        <MoviePreview movie={movie} />
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
