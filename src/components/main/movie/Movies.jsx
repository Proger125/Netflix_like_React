import React from "react";
import Movie from "./Movie";

export default class Movies extends React.Component {
    render() {
        return (
            <div className="movies">
                <Movie name="Pulp Fiction" movieCreationDate={2004} movieGenres={"Action & Adventure"} img={"pulp_fiction.png"}/>
                <Movie name="Bohemian Rhapsody" movieCreationDate={2003} movieGenres={"Drama, Biography, Music"} img={"bohemian_rhapsody.png"} />
                <Movie name="Kill Bill: Vol 2" movieCreationDate={1994} movieGenres={"Oscar winning movie"} img={"kill_bill.png"}/>
                <Movie name="Avengers: War of Infinity" movieCreationDate={2004} movieGenres={"Action & Adventure"} img={"avengers_war_of_infinity.png"} />
                <Movie name="Inception" movieCreationDate={2003} movieGenres={"Action & Adventure"} img={"inception.png"} />
                <Movie name="Reservoir Dogs" movieCreationDate={1994} img={"reservoir_dogs.png"}/>
            </div>
        )
    }
}