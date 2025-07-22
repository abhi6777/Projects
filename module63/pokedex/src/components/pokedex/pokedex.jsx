// css imports
import './pokedex.css';


import Search from '../search/search';
import PokemonList from '../pokemonList/pokemonList';

function Pokedex() {

     return(
          <div className='pokedex-wrapper'>
               <h1>Pokedex</h1>
               <Search />
               <PokemonList />
          </div>
     )
};

export default Pokedex;