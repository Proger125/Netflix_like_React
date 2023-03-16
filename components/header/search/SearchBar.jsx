import React from 'react';
import { useRouter } from 'next/router';
import SearchBarAction from './SearchBarAction';

export default function SearchBar() {
  const router = useRouter();
  const handleSubmit = async (search, sortBy, genre) => {
    router.push(`/search?genre=${genre}&sortBy=${sortBy}&search=${search}`);
  };

  return (
    <div className="searchbar">
      <span>FIND YOUR MOVIE</span>
      <br />
      <SearchBarAction onSubmit={handleSubmit} />
    </div>
  );
}
