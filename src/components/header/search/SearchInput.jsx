import React from "react";

export default class SearchInput extends React.Component {
    render() {
        return(
            <input className="searchbar-input" type={"text"} placeholder={"What do you want to watch?"}/>
        )
    }
}