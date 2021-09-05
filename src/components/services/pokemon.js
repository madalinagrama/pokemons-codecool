import axios from 'axios';

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(function ({ data }) {
                resolve(data);
            })
    })
}

export async function getPokemon(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(function ({ data }) {
                resolve(data);
            })
    })
}

export async function loadingTypes(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(function ({ data }) {
                resolve(data);
            })
    })
}