import React from 'react';

import './PokemonList.css';
import PokemonDetail from "../card/PokemonDetail";

const PokemonList = (props) => {
    return (<ul className="pokemon-list">
            {props.items.map((pokemon) => (
                <PokemonDetail
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                url={pokemon.url}
                />
            ))}
        </ul>
    )
}

export default PokemonList;