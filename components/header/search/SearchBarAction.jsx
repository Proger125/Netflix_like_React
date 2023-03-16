import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function SearchBarAction(props) {
  const { onSubmit } = props;
  const router = useRouter();
  const { search, genre, sortBy } = router.query;
  const searchParam = search === undefined ? '' : search;
  return (
    <Formik
      initialValues={{
        search: searchParam,
      }}
      onSubmit={(values) => {
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
