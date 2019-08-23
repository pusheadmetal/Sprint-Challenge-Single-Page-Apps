import React from "react";
import { Route } from "react-router-dom";
import TabExampleBasic from "./components/TabNav";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import EpisodesList from "./components/EpisodesList";
import LocationsList from "./components/LocationsList";
import "semantic-ui-css/semantic.min.css";
import "./App.css";


export default function App() {
  return (
    <main>
      <Header />
      <TabExampleBasic />
      <Route path = "/" exact component = {WelcomePage} />
      <Route path = "/characters" component = {CharacterList} />
      <Route path = "/episodes" component = {EpisodesList} />
      <Route path = "/locations" component = {LocationsList} />
    </main>
  );
}
