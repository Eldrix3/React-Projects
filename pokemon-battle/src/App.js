import React from "react";
import { useState, useEffect } from "react";
import { PokemonList } from "./PokemonList";

const App = () => {
  const [pokeInfo, setInfo] = useState([]);
  useEffect(() => {
    setInfo(PokemonList);
  }, []);
  return (
    <React.Fragment>
      <div>
        {pokeInfo.map((pokemon) => {
          return (
            <React.Fragment>{pokemon.Pikachu.map(pkmInfo)}</React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default App;
