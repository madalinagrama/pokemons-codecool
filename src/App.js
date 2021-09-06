import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import PokemonList from "./components/lists/PokemonList";
import {
    getAllPokemon,
    getPokemon,
    loadingTypes,
} from "./components/services/pokemon";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import { PokemonProvider } from "./PokemonContext";
import PokemonInfo from "./components/cardDetails/PokemonInfo";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TypeList from "./components/lists/TypeList";

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const initialUrl = "https://pokeapi.co/api/v2/pokemon";
    const typesUrl = "https://pokeapi.co/api/v2/type";

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialUrl);
            let types = await loadingTypes(typesUrl);
            await loadingPokemon(response.results);
            setTypes(types.results);
            setLoading(false);
        }
        fetchData();
    }, [setLoading]);

    const loadingPokemon = async (data) => {
        let _pokemon = await Promise.all(
            data.map(async (pokemon) => {
                return await getPokemon(pokemon.url);
            })
        );
        setPokemonData(_pokemon);
    };

    return (
        <PokemonProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/">
                        <Container>
                            <h3>See them in one video!!!</h3>
                            <ReactPlayer
                                responsive
                                url="https://www.youtube.com/watch?v=MfTMC-C48yU"
                                playing={true}
                                volume={0}
                                controls={true}
                            />
                        </Container>
                    </Route>
                    <Route
                        path="/pokemons"
                        render={(props) => (
                            <PokemonList pokemonData={pokemonData} />
                        )}
                    />
                    <Route
                        path="/types"
                        render={(props) => <TypeList types={types} />}
                    />
                    <Route
                        path="/pokemon/:pokemonId/"
                        render={(props) => (
                            <PokemonInfo pokemonData={pokemonData} />
                        )}
                    />
                </div>
            </Router>
        </PokemonProvider>
    );
}

export default App;
