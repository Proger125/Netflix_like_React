import React from 'react';
import SearchBarAction from './SearchBarAction';

export default function SearchBar() {
  return (
    <div className="searchbar">
      <span>FIND YOUR MOVIE</span>
      <br />
      <SearchBarAction />
    </div>
  );
}
