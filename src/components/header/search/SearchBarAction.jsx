import React from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export default function SearchBarAction() {
  return (
    <div className="searchbar-action">
      <SearchInput />
      <SearchButton />
    </div>
  );
}
