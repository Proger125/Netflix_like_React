import React from "react";
import Genres from "./genre/Genres";
import MovieNumber from "./movie/MovieNumber";
import Movies from "./movie/Movies";
import SortBy from "./sort/SortBy";

export default class Content extends React.Component {
    render() {
        return (
            <div className="main-content">
                <Genres />
                <SortBy />
                <div className="splitter-line"></div>
                <MovieNumber movieNumber={39} />
                <Movies />
            </div>
        )
    }
}