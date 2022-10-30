/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

const genres = [ 
  {
    genre: 'Documentary',
  }, 
  {
    genre: 'Comedy',
  }, 
  {
    genre: 'Horror',
  },
  {  
    genre: 'Crime',
  },
];

export default class AddOrEditMovieModalContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTogglerUp: false,
    };
  }

  render() {
    const movie = this.props.movie;
    let movieName = null;
    let movieReleaseDate = null;
    if (movie != null) {
      movieName = movie.name;
      movieReleaseDate = movie.movieCreationDate;
    }
    let isTogglerUp = this.state.isTogglerUp;
    let generOptions = null;
    if (isTogglerUp) {
      generOptions = (
        <div className="gener-options">
          {genres.map(genre => (
            <label className="genre-option-label">
              <input type={'checkbox'}/>
              {genre.genre}
            </label>
          ))}
        </div>
      );
    }
    return (
      <>
        <span className="modal-header">ADD MOVIE</span>
        <form className="modal-form">
          <div className="modal-form-group">
            <span className="modal-form-group-header">TITLE</span>
            <br />
            <input className="modal-form-group-input left-column" 
              type={'text'} placeholder={'Film Title'} value={movieName}/>
          </div>
          <div className="modal-form-group with-left-margin">
            <span className="modal-form-group-header">RELEASE DATE</span>
            <br />
            <input className="modal-form-group-input right-column"
              type={'date'} value={movieReleaseDate}/>
          </div>
          <div className="modal-form-group">
            <span className="modal-form-group-header">MOVIE URL</span>
            <br />
            <input className="modal-form-group-input left-column" 
              type={'text'} placeholder={'https://'}/>
          </div>
          <div className="modal-form-group with-left-margin">
            <span className="modal-form-group-header">RATING</span>
            <br />
            <input className="modal-form-group-input right-column"
              type={'text'} placeholder={'7.8'}/>
          </div>
          <div className="modal-form-group">
            <span className="modal-form-group-header">GENRE</span>
            <br />
            <div className="genre-dropdown">
              <input className="genre-dropdown-input" type={'text'} disabled/>
              <div className="genre-dropdown-toggler-wrapper" 
                onClick={() => {
                  this.setState({
                    isTogglerUp: !isTogglerUp,
                  });
                }}>
                <div className={isTogglerUp ? 
                  'genre-dropdown-toggler-up' 
                  : 'genre-dropdown-toggler-down'}>
                </div>
              </div>
              <br />
              {generOptions}
            </div>
          </div>
          <div className="modal-form-group with-left-margin">
            <span className="modal-form-group-header">RUNTIME</span>
            <br />
            <input className="modal-form-group-input right-column"
              type={'text'} placeholder={'minutes'}/>
          </div>
          <div className="modal-form-group">
            <span className="modal-form-group-header">OVERVIEW</span>
            <br />
            <textarea className="modal-form-overview"/>
          </div>
          <div className="modal-form-control-buttons">
            <button className="modal-form-control-button reset-button">
                  RESET
            </button>
            <button className="modal-form-control-button submit-button">
                  SUBMIT
            </button>
          </div>
        </form>
      </>
    );
  }
}