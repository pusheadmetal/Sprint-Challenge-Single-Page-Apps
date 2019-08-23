import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {

  const [locationsList, setLocationsList] = useState();

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/")
         .then( (res) => setLocationsList(res.data.results))
         .catch( (err) => console.log(err));
  }, [locationsList]);

  if (!locationsList){
    return <h2>Loading...</h2>
  }

  return (
    <section className="locations-list grid-view">
      {locationsList.map( (item) => <LocationCard getLocation = {item} />)}
    </section>
  );

}
