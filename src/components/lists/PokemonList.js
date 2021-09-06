import React from "react";
import CardComponent from "../cardDetails/CardComponent";
import "./pokemon-data.css";

const PokemonList = ({ pokemonData }) => (
    <div className="pokemon-data">
        {pokemonData.map((pokemon) => (
            <CardComponent key={pokemon.url} pokemon={pokemon} />
        ))}
    </div>
);

export default PokemonList;
