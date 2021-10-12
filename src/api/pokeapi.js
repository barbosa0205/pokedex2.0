import axios from 'axios'
import { getRandomNumber } from '../helpers/getRandomNumber'

export const getRandomPokemonById = async () => {
    try {
        const id = getRandomNumber(1, 500)
        const url = 'https://pokeapi.co/api/v2/pokemon'
        const { data } = await axios.get(`${url}/${id}`)
        const types = data.types
        const img = data.sprites.other.dream_world.front_default
        if (img === undefined) {
            return {
                name: data.name,
                img: data.sprites.front_default,
                types,
            }
        }
        return {
            name: data.name,
            img,
            types,
        }
    } catch (error) {
        console.error(error)
    }
}

export const getPokemon = async pokemon => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon'
        if (pokemon) {
            const { data } = await axios.get(`${url}/${pokemon}`)
            return data
        }
    } catch (error) {
        console.error(error)
    }
}
