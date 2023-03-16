import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BackToSearch() {
  const router = useRouter();
  const { genre, sortBy, search } = router.query;
  return (
    <Link
      href={
        search === ''
          ? `/search/${search}?genre=${genre}&sortBy=${sortBy}`
          : `/search?genre=${genre}&sortBy=${sortBy}`
      }
      className="back-to-search"
    >
      <img src="img/search.png" alt="Search icon" />
    </Link>
  );
}
