import React, { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import PokemonList from "./components/lists/PokemonList";
import { getAllPokemon, getPokemon, loadingTypes } from "./components/services/pokemon";
import  ReactPlayer from 'react-player';

import 'App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(true);
    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';
    const typesUrl = 'https://pokeapi.co/api/v2/type';

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(pokemonUrl);
            let types = await loadingTypes(typesUrl);
            await loadingPokemon (response.result);
            setTypes(types.result);
            setLoading(false);
        }
        fetchData();
    }, [setLoading])

    const loadingPokemon = async (data) => {
        let _pokemon = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemonUrl);
        return pokemonRecord;
        }));
        setPokemonData(_pokemon);
    }


  return (
    <div>
      <Header/>
        <PokemonList/>
    </div>
  );
}

export default App;
