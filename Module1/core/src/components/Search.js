import React from "react";

export default class Search extends React.Component {
    render() {
        return(
            <div className={"search-form"}>
                <h2>Search Form</h2>
                <input type={"text"} placeholder={"Enter search request..."} />
                <br/>
                <input type={"submit"} value={"Search"}/>
            </div>
        )
    }
}