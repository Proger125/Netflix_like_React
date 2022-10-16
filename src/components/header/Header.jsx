import React from "react";
import AddMovie from "./AddMovie";
import Logo from "./Logo";
import SearchBar from "./search/SearchBar";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Logo/>
                <AddMovie/>
                <SearchBar />
            </div>
        )
    }
}