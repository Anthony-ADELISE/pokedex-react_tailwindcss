import { useState } from "react";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import { URL_POKEMON } from "./api/api";
import CardPokemon from "./components/CardPokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const apiPokemon = await axios.get(`${URL_POKEMON}`);

      setPokemons(apiPokemon.data.results);
    };

    getPokemon();
  }, []);

  return (
    <div>
      <Header />
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-x-5 gap-y-5 px-10 py-10">
        {pokemons.map((pokemon, index) => {
          return <CardPokemon key={index} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default App;
