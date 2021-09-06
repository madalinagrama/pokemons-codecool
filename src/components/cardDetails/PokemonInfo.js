import { useParams } from "react-router";
import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PokemonContext } from "../../PokemonContext";

const Card = styled.div`
    position: absolute;
    width: 700px;
    height: 450px;
    padding: 0 25px;
    left: 50%;
    top: 115px;
    margin-left: -220px;
    background: #e9e2d0;
    box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
    z-index: 5;
`;

const Image = styled.img`
    width: 150px;
    float: left;
    border-radius: 5px;
    margin-right: 10px;
    filter: sepia(1);
`;

const H2 = styled.h2`
    font-family: "Courier", sans-serif;
    color: #333;
    margin: 0 auto;
    padding: 0;
    font-size: 15pt;
    text-transform: uppercase;
`;

const H3 = styled.h3`
    font-family: "Courier", sans-serif;
    color: #333;
    margin: 0 auto;
    padding: 0;
    font-size: 12pt;
    text-transform: uppercase;
`;

const P = styled.p`
    font-family: "Courier", sans-serif;
    color: #555;
    font-size: 13px;
`;

const PokemonInfo = ({ pokemonData }) => {
    let { pokemonId } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonz, setPokemonz] = useContext(PokemonContext);

    const catchThisPokemon = (e) => {
        e.preventDefault();
        setPokemonz((prevPokemonz) => [...prevPokemonz, pokemon]);
    };

    useEffect(async () => {
        function waitForData() {
            if (!pokemonData.length) {
                setTimeout(waitForData, 150);
            } else {
                setPokemon(
                    pokemonData.find(
                        (pokemon) => pokemon.id === parseInt(pokemonId)
                    )
                );
                setIsLoading(false);
            }
        }
        waitForData();
    }, [pokemonData]);

    return (
        <Card>
            {isLoading ? (
                "Loading...."
            ) : (
                <>
                    <Image src={pokemon.sprites.front_default} />
                    <Container>
                        <Row>
                            <Col>
                                <H2>{pokemon.name}</H2>
                                <P />
                                <P>Height: {pokemon.height}</P>
                                <P>
                                    Base experience: {pokemon.base_experience}
                                </P>
                                <P>
                                    Abilities:{" "}
                                    {pokemon.types.map((type) => {
                                        return (
                                            <span
                                                key={type.type.name}
                                                style={{
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {type.type.name}{" "}
                                            </span>
                                        );
                                    })}
                                </P>
                                <P>Weight: {pokemon.weight} </P>
                            </Col>
                            <Col>
                                <P>
                                    <H3>Stats:</H3>
                                    {pokemon.stats.map((stat) => {
                                        return (
                                            <p
                                                key={stat.stat.name}
                                                style={{
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                {stat.stat.name} :{" "}
                                                {stat.base_stat}{" "}
                                            </p>
                                        );
                                    })}
                                </P>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </Card>
    );
};

export default PokemonInfo;
