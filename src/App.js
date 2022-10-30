import React from 'react';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Content from './components/main/Content';
import Modal from './components/modal/Modal';
import {ModalContext} from './components/modal/ModalContext';
import {SelectedMovieContext} from 
  './components/main/movie/SelectedMovieContext';

function App() {
  const [modalType, setModalType] = useState('none');
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <ErrorBoundary FallbackComponent={customFallbackComponent}>
        <ModalContext.Provider value={setModalType}>
          <SelectedMovieContext.Provider value={setSelectedMovie}>
            <Header />
            <Content/>
            <Footer>
              <span className="logo-text"><b>netflix</b>roulette</span> 
            </Footer>
            <Modal modalType={modalType} selectedMovie={selectedMovie}/>
          </SelectedMovieContext.Provider>
        </ModalContext.Provider>
      </ErrorBoundary>
    </>
  );
}

const customFallbackComponent = 
({ error, componentStack, resetErrorBoundary }) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default App;
