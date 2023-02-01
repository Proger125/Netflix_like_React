import React from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import SearchBarAction from './SearchBarAction';

export default function SearchBar() {
  const navigate = useNavigate();
  const handleSybmit = async (search, sortBy, genre) => {
    navigate({
      pathname: `/search/${search}`,
      search: `?${createSearchParams({ sortBy, genre })}`,
    });
  };

  return (
    <div className="searchbar">
      <span>FIND YOUR MOVIE</span>
      <br />
      <SearchBarAction onSubmit={handleSybmit} />
    </div>
  );
}
