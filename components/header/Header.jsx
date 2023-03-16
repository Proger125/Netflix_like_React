import React from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { movieId } = router.query;
  if (movieId) {
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
