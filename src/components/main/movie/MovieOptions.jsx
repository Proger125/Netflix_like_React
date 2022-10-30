/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { ModalContext } from '../../modal/ModalContext';
import { SelectedMovieContext } from './SelectedMovieContext';

export default class MovieOptions extends React.Component {

  render() {
    let options;
    const movie = this.props.movie;
    if (this.props.isOpened) {
      options = (
        <div className="movie-options-opened">
          <span className="movie-options-close-button" 
            onClick={() => this.props.setOpened(false)}>&times;</span>
          <ModalContext.Consumer>
            {(setModalType) => (
              <SelectedMovieContext.Consumer>
                {(setSelectedMovie) => (
                  <span className="movie-options-option" 
                    onClick={() => {
                      setModalType('editMovie');
                      setSelectedMovie(movie);
                    }}>Edit</span>
                )}
              </SelectedMovieContext.Consumer>
            )}
          </ModalContext.Consumer>
          <ModalContext.Consumer>
            {(setModalType) => (
              <span className="movie-options-option" 
                onClick={() => setModalType('deleteMovie')}>Delete</span>
            )}
          </ModalContext.Consumer>
        </div>
      );
    } else {
      options = (
        <div className={'movie-options-closed'} 
          onClick={() => this.props.setOpened(true)}>
          <div className="movie-options-circle"></div>
          <div className="movie-options-circle"></div>
          <div className="movie-options-circle"></div>
        </div>    
      );
    }
    return (
      <>
        {options}
      </>
    );
  }
}