import { useDropdown } from "./customHook/useDropdown";
import { useNavigation } from "./customHook/useNavigation";
import data from "./data.json";
import "./App.css";

function App() {
  const { pokemon, currentIndex, currentPokemon, handleSelect } =
    useDropdown(data.pokemons);
  const { handlePrev, handleNext } = useNavigation(
    currentIndex,
    pokemon.length - 1,
    (newIndex) => handleSelect(pokemon[newIndex]?.name)
  );

  return (
    <div className="container">
      <div className="selector">
        <select
          id="pokemon-dropdown"
          onChange={(e) => handleSelect(e.target.value)}
          value={currentPokemon.name}
        >
          {pokemon.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="cards">
        <div className="cc">
          {currentPokemon && (
            <div key={currentPokemon.id}>
              <img src={currentPokemon.image} alt={currentPokemon.name} />
              <h1>{currentPokemon.name}</h1>
              <p>{currentPokemon.description}</p>
            </div>
          )}
        </div>

        <div className="btn">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            PREV
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === pokemon.length - 1}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
