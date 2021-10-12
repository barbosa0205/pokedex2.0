import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getPokemon, getRandomPokemonById } from '../api/pokeapi'

import '../scss/random-pokemon.scss'
export const RandomPokemon = () => {
    const history = useHistory()

    const [randomPokemon, setRandomPokemon] = useState({})

    useEffect(() => {
        ;(() => {
            setTimeout(async () => {
                setRandomPokemon(await getRandomPokemonById())
            }, 300)
        })()
    }, [])

    return (
        <article className="container">
            <i
                className="ri-restart-fill refresh"
                onClick={async () => {
                    setRandomPokemon(await getRandomPokemonById())
                }}
            ></i>
            <h3>{randomPokemon.name || '-'}</h3>
            <div className="image-container">
                {' '}
                <img
                    src={randomPokemon.img}
                    alt={randomPokemon.name}
                    onClick={() => {
                        history.push(`/pokemons/${randomPokemon.name}`)
                    }}
                />
            </div>
            <div className="data-container">
                <h4>type</h4>
                <div className="types-container">
                    {randomPokemon.types &&
                        randomPokemon.types.map(({ type }) => (
                            <div key={type.name}>
                                <p className={`type ${type.name}`}>
                                    {' '}
                                    {type.name}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </article>
    )
}
