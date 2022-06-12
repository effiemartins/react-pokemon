import React from 'react';
import {Pokemon} from './Pokemon';

export const DisplayPokemon = props => (
    <div className='card-list'>
        {props.pokemons.map(pokemon =>(
        <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
        ))}
    </div>
);