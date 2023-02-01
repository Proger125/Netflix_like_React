import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Content from './components/main/Content';
import Modal from './components/modal/Modal';

function App() {
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
      <Footer />
      <Modal />
    </ErrorBoundary>
  );
}

export default App;
