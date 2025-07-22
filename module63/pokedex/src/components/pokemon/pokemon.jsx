// css imports
import './pokemon.css';
import { Link } from 'react-router-dom';

function Pokemon({name, url, id}) {
     return (
          <div className="pokemon">
               <Link to={`/pokemon/${id}`}>
                    <div className='pokemonName'>{name}</div>
                    <img className='pokemonImg' src={url} alt="" />
               </Link>
          </div>
     )
};

export default Pokemon;