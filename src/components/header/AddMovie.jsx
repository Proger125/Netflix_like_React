import React from "react";
import { ModalContext } from "../modal/ModalContext";

export default class AddMovie extends React.Component {
    render() {
        return (
            <ModalContext.Consumer>
                {(setModalType) => (
                    <button className="add-movie-button" onClick={() => setModalType("addMovie")}><b>+ ADD MOVIE</b></button>
                )}
            </ModalContext.Consumer>
        )
    }
}