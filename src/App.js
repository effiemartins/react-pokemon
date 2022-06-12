import React from "react";
import "./style.css";
import {DisplayPokemon} from './components/DisplayPokemon';
import { Component } from "react";

class App extends Component {
    constructor(){
    super();

    this.state = {
        pokemons: [],
            search:''
        };
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
        .then(response => response.json())
        .then(name => this.setState({pokemons:name.results}));
    }

    handleChange=(e) => {
        this.setState({search: e.target.value});
    };

    render(){

        const {pokemons, search } = this.state;
        const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
        return(
            <div class="App">
                <DisplayPokemon pokemons={fileteredPokemons}></DisplayPokemon>
            </div>
        )
    }
}

export default App;