import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Content from './main/Content';
import Footer from './footer/Footer';
import Modal from './modal/Modal';

export default function Layout({ children }) {
  const customFallbackComponent = ({ error, resetErrorBoundary }) => (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );

  return (
    <ErrorBoundary FallbackComponent={customFallbackComponent}>
      <Header />
      <Content />
      {children}
      <Footer />
      <Modal />
    </ErrorBoundary>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
