// css imports
import './pokemon.css';
import { Link } from 'react-router-dom';

function Pokemon({name, url, id}) {
     return (
          <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
               <div className="pokemon">
                         <div className='pokemonName'>{name}</div>
                         <img className='pokemonImg' src={url} alt="" />
               </div>
          </Link>
     )
};

export default Pokemon;