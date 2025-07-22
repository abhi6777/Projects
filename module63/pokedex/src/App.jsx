import { useState } from 'react';
import Pokedex from './components/pokedex/pokedex';

import './App.css'
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/pokemonDetails/pokemonDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
