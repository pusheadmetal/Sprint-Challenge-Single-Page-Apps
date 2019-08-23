import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {

  const [episodesList, setEpisodesList] = useState();

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode/")
         .then( (res) => setEpisodesList(res.data.results))
         .catch( (err) => console.log(err));
  }, [episodesList]);

  if (!episodesList){
    return <h2>Loading...</h2>
  }

  return (
    <section className="episodes-list grid-view">
      {episodesList.map( (item) => <EpisodeCard getEpisode = {item} />)}
    </section>
  );

}