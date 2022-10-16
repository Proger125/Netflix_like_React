import React from "react";
import SortByOption from "./SortByOption";

export default class SortBy extends React.Component {
    render() {
        
        return (
            <div className="sort-by">
                <span>SORT BY</span>
                <SortByOption sortByOption={"RELEASE DATE"}/>
            </div>
        )
    }
}