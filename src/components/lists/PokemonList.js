import React from 'react';
import CardComponent from './CardComponent';

const PokemonList = ({ pokemonData }) => {
    console.log(pokemonData)
    return pokemonData.map((pokemon) => (
        <CardComponent key={pokemon.url} pokemon={pokemon}/>
    ))
}



export default PokemonList;