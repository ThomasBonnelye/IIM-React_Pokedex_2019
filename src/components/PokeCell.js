import React from 'react';
import './styles/PokeCell.css';

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id } = pokeClass;
  return <button onClick={() => handleOnClick(id)} className="poke-cell"></button>
};

export default PokeCell;