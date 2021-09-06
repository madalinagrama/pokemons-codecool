import React from 'react';
import CardComponent from '../cardDetails/CardComponent';
import './PokemonList.css';

const PokemonList = ({pokemonData}) => {
    console.log(pokemonData)
    return (
        <div className={"pokemon-data"}>
            {pokemonData.map((pokemon) => (
                <CardComponent key={pokemon.url} pokemon={pokemon}/>
            ))}
        </div>
    )
}


export default PokemonList;