import React from 'react';
import PopulationTable from "./components/PopulationTable/PopulationTable.jsx";
import CharactersList from "./components/CharactersList/CharactersList.jsx";
import EpisodesList from "./components/EpisodesList/EpisodesList.jsx";

const App = () => {
  const populationData = [
    { Year: 2000, Population: 100000 },
    { Year: 2001, Population: 110000 },

  ];

  const swapiCharacters = [
    { name: 'Luke Skywalker', gender: 'male', hair_color: 'blond', eye_color: 'blue' },
    { name: 'Leia Organa', gender: 'female', hair_color: 'brown', eye_color: 'brown' },

  ];

  const rickAndMortyEpisodes = [
    { name: 'Pilot', air_date: 'December 2, 2013' },
    { name: 'Lawnmower Dog', air_date: 'December 9, 2013' },

  ];

  return (
      <div>
        <h1>Population Data</h1>
        <PopulationTable data={populationData} />

        <h1>Swapi Characters</h1>
        <CharactersList characters={swapiCharacters} />

        <h1>Rick and Morty Episodes</h1>
        <EpisodesList episodes={rickAndMortyEpisodes} />
      </div>
  );
};

export default App;
