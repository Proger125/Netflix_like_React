import React from "react";
import SearchBarAction from "./SearchBarAction";


export default class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchbar">
                <span>FIND YOUR MOVIE</span>
                <br/>
                <SearchBarAction/>
            </div>
        )
    }
}