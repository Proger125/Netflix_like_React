import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useLoaderData } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function SearchBarAction(props) {
  const { onSubmit } = props;
  const { searchQuery, genreParam, sortBy } = useLoaderData();
  return (
    <Formik
      initialValues={{
        search: searchQuery,
      }}
      onSubmit={(values) => {
        const genre = genreParam;
        onSubmit(values.search, sortBy, genre);
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

SearchBarAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
