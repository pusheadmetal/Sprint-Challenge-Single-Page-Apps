import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [charList, setCharList] = useState();

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
         .then( (res) => setCharList(res.data.results))
         .catch( (err) => console.log(err));
  }, [charList]);

  if (!charList){
    return <h2>Loading...</h2>
  }

  return (
    <section className="character-list grid-view">
      {charList.map( (item) => <CharacterCard getChar = {item} />)}
    </section>
  );
}
