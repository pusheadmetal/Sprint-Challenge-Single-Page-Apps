import React from "react";
import { Link } from "react-router-dom";

export default function CharacterCard(props) {

  function getTotalEpisodes(){

    let totalEpisodes = 0;
    props.getChar.episode.forEach( function (item) {
      totalEpisodes = totalEpisodes + 1;
    })
    return totalEpisodes;
  }

  return (
    <div class="ui card">
      <div class="image">
        <img src = {props.getChar.image} />
      </div>
      <div class="content">
        <div class="header">{props.getChar.name}</div>
        <div class="meta"><span class="date">{props.getChar.created}</span></div>
        <div class="description">
          <p>{props.getChar.gender}</p>
          <p>{props.getChar.status}</p>
          <p>{props.getChar.species}</p>
          <p>{props.getChar.type}</p>
          <p>{Object.values(props.getChar.origin).map( (item) => <p>{item}</p>)}</p>
          <p>{Object.values(props.getChar.location).map( (item) => <p>{item}</p>)}</p>
        </div>
      </div>
      <div class="extra content">
        <Link to = "/episodes">
          <i aria-hidden="true" class="user icon"></i>
          <p>Appears In {getTotalEpisodes()} episodes. </p>
        </Link>
      </div>
    </div>
  );
}
