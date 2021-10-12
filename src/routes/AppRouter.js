import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Home } from '../pages/Home'
import { Pokemon } from '../pages/Pokemon'
import { Pokemons } from '../pages/Pokemons'
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/pokemons" component={Pokemons} />
                    <Route exact path="/pokemons/:id" component={Pokemon} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    )
}
