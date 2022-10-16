import React from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

export default class SearchBarAction extends React.Component {
    render() {
        return(
            <div className="searchbar-action">
                <SearchInput />
                <SearchButton />
            </div>
        )
    }
}