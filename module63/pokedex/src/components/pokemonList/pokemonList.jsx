import axios, { all } from 'axios';
import { useEffect, useState } from 'react';

// import css 
import './pokemonList.css';
import Pokemon from '../pokemon/pokemon';


function PokemonList() {
     const defaultUrl = "https://pokeapi.co/api/v2/pokemon";
     const [pokemonList, setPokemonList ] = useState([]);
     const [PokedexUrl, setPokedexUrl] = useState(defaultUrl);
     const [nextUrl, setNextUrl] = useState(defaultUrl);
     const [prevUrl, setPrevUrl] = useState(defaultUrl);

     async function downloadPokemons() {

          const response = await axios.get(PokedexUrl ? PokedexUrl : defaultUrl);

          const pokemonResults = response.data.results ; // Array of pokemon

          // setting next and prev button url
          setNextUrl(response.data.next);
          setPrevUrl(response.data.previous);

          const pokemonPromise = pokemonResults.map((pokemon) => {
               return axios.get(pokemon.url);
          });

          const pokemonListData = await axios.all(pokemonPromise);

          const pokemonFinalList = pokemonListData.map(pokemonData => {
               const pokemon = pokemonData.data;
               return {
                    id: pokemon.id,
                    name: pokemon.name,
                    Image: pokemon.sprites.other.dream_world.front_default,
                    types: pokemon.types,
               }
          });

          setPokemonList(pokemonFinalList);

          console.log(pokemonFinalList)
     };
      
     useEffect(() => {
          downloadPokemons();
     }, [PokedexUrl]);

     return (
          <div className='pokemonListWrapper'>
               <div className='pokemonListHeader'>Pokemon List</div>
               <div className='pageControls'>
                    <button onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
                    <button onClick={() => setPokedexUrl(nextUrl)}>Next</button>
               </div>
               <div className="pokemonList">
                    {pokemonList.map(pokemon => <Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.Image} id={pokemon.id} />)}
               </div>
               
          </div>
     )

};

export default PokemonList;