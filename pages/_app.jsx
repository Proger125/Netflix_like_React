/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import wrapper from '../redux/store';
import '../static/header-style.css';
import '../static/content-style.css';
import '../static/footer-styles.css';
import '../static/modal.css';

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  rest: PropTypes.any.isRequired,
};
