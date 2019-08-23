import React from "react";
import { Link } from "react-router-dom";

export default function EpisodeCard(props) {

  function getTotalCharacters(){

    let totalCharacters = 0;
    props.getEpisode.characters.forEach( function (item) {
      totalCharacters = totalCharacters + 1;
    })
    return totalCharacters;
  }

  return (
    <div class="ui card">
      <div class="content">
        <div class="header">{props.getEpisode.name}</div>
        <div class="meta"><span class="date">{props.getEpisode.air_date}</span></div>
        <div class="description">
          <p>{props.getEpisode.episode}</p>
        </div>
      </div>
      <div class="extra content">
        <Link to = "/characters">
          <i aria-hidden="true" class="user icon"></i>
          <p>Features {getTotalCharacters()} characters. </p>
        </Link>
      </div>
    </div>
  );
}
