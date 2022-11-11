import React from 'react';
import AddMovie from './AddMovie';
import Logo from './Logo';
import SearchBar from './search/SearchBar';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <AddMovie />
      <SearchBar />
    </div>
  );
}
