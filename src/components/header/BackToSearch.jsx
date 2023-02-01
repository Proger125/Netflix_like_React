import React from 'react';
import { useSubmit, useLoaderData, Form } from 'react-router-dom';

export default function BackToSearch() {
  const { genreParam, sortBy } = useLoaderData();
  const submit = useSubmit();
  return (
    <Form
      className="back-to-search"
      onClick={(event) => submit(event.currentTarget)}
      role="search"
      tabIndex={0}
      aria-hidden="true"
    >
      <input type="hidden" name="genre" value={genreParam} />
      <input type="hidden" name="sortBy" value={sortBy} />
      <img src="img/search.png" alt="Search icon" />
    </Form>
  );
}
