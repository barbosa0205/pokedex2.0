import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { getPokemon } from '../api/pokeapi'

export const Pokemon = () => {
    const location = useLocation()

    const [pokemon, setPokemon] = useState('')
    const [pokemonData, setPokemonData] = useState({})
    const poke = location.pathname.slice(10).toLowerCase()

    useEffect(() => {
        ;(async () => {
            setPokemon(poke)
            const response = await getPokemon(pokemon)
            console.log(response)
            setPokemonData(response)
        })()
    }, [pokemon, poke])

    return (
        <div className="main-container">
            {pokemonData ? (
                <div className="card-container">
                    <h1>{pokemonData.name}</h1>
                </div>
            ) : (
                <h1>LOADING...</h1>
            )}
        </div>
    )
}
