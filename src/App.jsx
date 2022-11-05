import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Content from './components/main/Content';
import Modal from './components/modal/Modal';
import ModalContext from './components/modal/ModalContext';
import SelectedMovieContext from './components/main/movie/SelectedMovieContext';

function App() {
  const [modalType, setModalType] = useState('none');
  const [selectedMovie, setSelectedMovie] = useState(null);

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
      <ModalContext.Provider value={setModalType}>
        <SelectedMovieContext.Provider value={setSelectedMovie}>
          <Header />
          <Content />
          <Footer />
          <Modal modalType={modalType} selectedMovie={selectedMovie} />
        </SelectedMovieContext.Provider>
      </ModalContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
