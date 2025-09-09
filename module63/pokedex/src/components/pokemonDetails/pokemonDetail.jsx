// css Imports
import { useEffect, useState } from 'react';
import './pokemonDetail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonDetails() {
     const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/'
     const { id } = useParams();

     const [pokemon, setPokemon] = useState(null);

     async function downloadPokemon() {
          const response = await axios.get( POKEMON_DETAIL_URL + id );
          const pokemon = response.data;
          setPokemon({
               name: pokemon.name,
               height: pokemon.height,
               weight: pokemon.weight,
               types: pokemon.types,
               image: pokemon.sprites.other.dream_world.front_default
          });
     };

     useEffect(() => {
          downloadPokemon();
     }, [id]);

     return (
          <>
          <h1 className='pokedex_redirect'>
               <Link to="/">
                    Pokedex
               </Link>
          </h1>
          {pokemon && <div className='pokemon_detail_wrapper'>
               <div className='pokemon_name'>
                    {pokemon.name}
               </div>
               <div className='pokemon_image'>
                    <img src={pokemon.image} alt="" />
               </div>
               <div className='pokemon_attr'>
                    height = {pokemon.height};
                    weight = {pokemon.weight};
               </div>
               <div className='pokemon_type'>
                    <b>Type:</b> {pokemon.types.map(t => <span key={t.type.name}>{t.type.name} </span>)}
               </div>
          </div>} 
          </>
     )
}

export default PokemonDetails;