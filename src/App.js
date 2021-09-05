import React from "react";

import Header from "./components/header/Header";
import PokemonList from "./components/lists/PokemonList";


function App() {
  return (
    <div>
      <Header/>
        <PokemonList/>
    </div>
  );
}

export default App;
