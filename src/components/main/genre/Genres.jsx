import React from "react";
import Genre from "./Genre";

export default class Genres extends React.Component {
    render() {
        return (
            <div className="genres">
                <Genre genre={"ALL"} isSelected={true}/>
                <Genre genre={"DOCUMENTARY"} isSelected={false}/>
                <Genre genre={"COMEDY"} isSelected={false}/>
                <Genre genre={"HORROR"} isSelected={false}/>
                <Genre genre={"CRIME"} isSelected={false}/>
            </div>
        )
    }
}