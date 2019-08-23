import React from "react";
import { Link } from "react-router-dom";

export default function LocationCard(props) {
  
  function getTotalResidents(){

    let totalResidents = 0;
    props.getLocation.residents.forEach( function (item) {
      totalResidents = totalResidents + 1;
    })
    return totalResidents;
  }

  return (
    <div class="ui card">
      <div class="content">
        <div class="header">{props.getLocation.name}</div>
        <div class="meta"><span class="date">{props.getLocation.created}</span></div>
        <div class="description">
          <p>{props.getLocation.type}</p>
          <p>{props.getLocation.dimension}</p>
        </div>
        <div class="extra content">
          <Link to = "/characters">
            <i aria-hidden="true" class="user icon"></i>
            <p>Residents: {getTotalResidents()}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
