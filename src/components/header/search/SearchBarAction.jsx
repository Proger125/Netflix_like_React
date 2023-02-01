import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  useNavigate,
  useLoaderData,
  createSearchParams,
} from 'react-router-dom';

export default function SearchBarAction() {
  const { searchQuery, genreParam, sortBy } = useLoaderData();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        search: searchQuery,
      }}
      onSubmit={(values) => {
        const genre = genreParam;
        navigate({
          pathname: `/search/${values.search}`,
          search: `?${createSearchParams({ sortBy, genre })}`,
        });
      }}
    >
      {({ values, handleChange }) => (
        <Form className="searchbar-action">
          <Field
            className="searchbar-input"
            type="text"
            name="search"
            placeholder="What do you want to watch?"
            value={values.search}
            onChange={handleChange}
          />
          <button className="searchbar-button" type="submit">
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
}
