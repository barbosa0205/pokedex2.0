import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../scss/search.scss'

export const Search = () => {
    const history = useHistory()
    const [search, setSearch] = useState('')

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                history.push(`/pokemons/${search.trim()}`)
            }}
        >
            <div className="search-container">
                <input
                    type="text"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder={`Try to search any pokemon by id or by name`}
                />
                <i className="ri-search-2-line"></i>
            </div>
        </form>
    )
}
