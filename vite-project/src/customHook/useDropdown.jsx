import { useState } from "react";

export function useDropdown(initialData) {
  const [pokemon, setPokemon] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedName) => {
    const index = pokemon.findIndex((poke) => poke.name === selectedName);
    setCurrentIndex(index);
  };

  return {
    pokemon,
    currentIndex,
    currentPokemon: pokemon[currentIndex],
    handleSelect,
  };
}
