import { useEffect, useState } from 'react'
import './App.css'
import data from "./data.json"

function App() {
  const [pokemon, setPokemon] = useState(data.pokemons)
  const [currentIndex , setCurrentIndex] = useState(0)
  const [filterpokemon , setFilterPokemon] = useState(data.pokemons)

  function handlePoke(e){
    const selectpoke = e.target.value;
    const index = pokemon.findIndex((poke)=> poke.name === selectpoke);
    setCurrentIndex(index)
  }

  function handelPrev(){
    if(currentIndex > 0){
      setCurrentIndex(currentIndex-1)
    }
  }

  function handleNext(){
    if(currentIndex < pokemon.length -1){
      setCurrentIndex(currentIndex+1)
    }
  }

  const currPoke = pokemon[currentIndex]
  return (
    <>
    <div className='container'>
      <div className='selector'>
        <select id="pokemon-dropdown" onChange={handlePoke} value={currPoke.name}>
          {
            filterpokemon.map((item) => (
              <option key={item.id} value={item.name}>
                  {item.name}
              </option>
            ))
          }
        </select>
      </div>

      <div className='cards'>
        <div className='cc'>
        {currPoke && (
         <div key={currPoke.id}>
          <img src={currPoke.image} alt={currPoke.image} />
          <h1>{currPoke.name}</h1>
          <p>{currPoke.description}</p>
         </div>
        )}
        </div>
      
      
        <div className='btn'>
          <button onClick={handelPrev} disabled={currentIndex===0} >PREV</button>
          <button onClick={handleNext} disabled={currentIndex===pokemon.length-1} >NEXT</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
