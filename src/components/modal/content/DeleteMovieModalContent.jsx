import React from 'react';

export default class DeleteMovieModalContent extends React.Component {
  render() {
    return (
      <>
        <span className="modal-header">DELETE MOVIE</span>
        <form className="modal-form">
          <span className="modal-text">
            Are you sure you want to delete this movie
          </span>
          <div className="modal-form-control-buttons">
            <button className="modal-form-control-button submit-button">
              SUBMIT
            </button>
          </div>
        </form>
      </>
    );
  }
}