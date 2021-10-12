import React from 'react'
import { Link } from 'react-router-dom'
import { RandomPokemon } from '../components/RandomPokemon'
import { Search } from '../components/Search'
import '../scss/home.scss'
export const Home = () => {
    return (
        <main className="main-container">
            <h1>Welcome to my POKEDEX 2.0</h1>
            <Search />
            <RandomPokemon />
            <Link className={`btn-see-all`} to="/pokemon">
                See All
            </Link>
        </main>
    )
}
