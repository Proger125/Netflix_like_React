/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import '../../static/css/modal.css';
import AddOrEditMovieModalContent from './content/AddOrEditMovieModalContent';
import DeleteMovieModalContent from './content/DeleteMovieModalContent';
import { ModalContext } from './ModalContext';
export default class Modal extends React.Component {
  render() {
    const modalType = this.props.modalType;
    let modalContent;
    if (modalType === 'addMovie') {
      modalContent = <AddOrEditMovieModalContent/>;
    } else if (modalType === 'editMovie') {
      const selectedMovie = this.props.selectedMovie;
      modalContent = <AddOrEditMovieModalContent movie={selectedMovie}/>;
    } else if (modalType === 'deleteMovie') {
      modalContent = <DeleteMovieModalContent/>;
    }
    return (
      <div className={modalType !== 'none' ? 'modal active' : 'modal'}>
        <div className="modal-content">
          <ModalContext.Consumer>
            {(setModalType) => (
              <span className="modal-close-button" 
                onClick={() => setModalType('none')}>&times;</span>
            )}
          </ModalContext.Consumer>
          {modalContent}
        </div>
      </div>
    );
  }
}