import { useEffect, useState } from "react";
import { URL_POKEMON, URL_SPECIES } from "../api/api";
import axios from "axios";
import Weight from "../assets/images/weight.svg";
import Height from "../assets/images/straighten.svg";
import Logo from "./Logo";

const CardPokemon = ({ pokemon }) => {
  const [itemPokemon, setItemPokemon] = useState([]);
  const [species, setSpecies] = useState([]);

  console.log(itemPokemon);

  useEffect(() => {
    const infoPokemon = async () => {
      const apiPokemon = await axios.get(`${URL_POKEMON}/${pokemon.name}`);
      setItemPokemon(apiPokemon.data);
    };

    infoPokemon();
  }, [pokemon.name]);

  useEffect(() => {
    const speciesPokemon = async () => {
      const apiPokemon = await axios.get(`${URL_SPECIES}/${pokemon.name}`);

      setSpecies(apiPokemon.data);
    };

    speciesPokemon();
  }, []);

  const backgroundColorClass = species?.color?.name
    ? `bg-${species.color.name}`
    : "";

  const textColorClass = species?.color?.name
    ? `text-${species.color.name}`
    : "text-black";

  const progressBarColorClass = `bg-${species?.color?.name || "gray-400"}`;

  const transformStatName = (fullName) => {
    const statAbbreviations = {
      hp: "HP",
      attack: "ATK",
      defense: "DEF",
      "special-attack": "SATK",
      "special-defense": "SDEF",
      speed: "SPD",
    };

    return statAbbreviations[fullName.toLowerCase()] || fullName;
  };

  return (
    <section className={`-z-30 px-1 ${backgroundColorClass} `}>
      <div className="card-pokemon  w-[342px] h-[600px] py-3 relative">
        <div className="flex items-center justify-between text-white font-bold pl-10 pr-5">
          <h3 className="text-2xl">{itemPokemon.name}</h3>
          <span>#{itemPokemon.order}</span>
        </div>
        <Logo className={"w-[200px] absolute top-1 right-0 -z-20 opacity-20"} />
        <img
          className="w-[200px] mx-auto z-50 mt-6"
          src={itemPokemon?.sprites?.other["official-artwork"]?.front_default}
        />
        {/* div info */}
        <div className="bg-white  rounded-lg absolute w-full -mt-14 -z-20">
          {/* div types */}
          <div className="mt-16 text-[10px] flex justify-center items-center gap-x-4 font-bold">
            {itemPokemon?.types?.map((type, index) => {
              return (
                <span
                  className={`text-white  py-1 px-2 rounded-xl color-${type.type.name}`}
                  key={index}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>

          {/* div about */}
          <div className="flex flex-col justify-center items-center pt-4">
            <h4 className={`text-sm font-bold ${textColorClass}`}>About</h4>
            <div className="flex items-center gap-x-10 pt-6">
              <div className="flex flex-col items-center gap-y-3">
                <div className="flex gap-x-2 items-center">
                  <img src={Weight} />
                  <span>{itemPokemon.weight} kg</span>
                </div>
                <span className="text-[8px]">Weight</span>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <div className="flex gap-x-2 items-center">
                  <img src={Height} />
                  <span>{itemPokemon.height} cm</span>
                </div>
                <span className="text-[8px]">Height</span>
              </div>
            </div>
          </div>

          {/* div stats */}
          <div className="pt-5 w-full">
            <h4 className={`text-center font-bold ${textColorClass}`}>
              Base Stats
            </h4>
            <div className="text-[10px] pl-5 py-5">
              {itemPokemon?.stats?.map((stat, index) => {
                const abbreviatedStatName = transformStatName(stat?.stat?.name);
                return (
                  <div className="flex items-center gap-x-5" key={index}>
                    <div className="flex items-center w-20 justify-between">
                      <span className={`font-bold ${textColorClass}`}>
                        {abbreviatedStatName}
                      </span>
                      <span>{stat?.base_stat}</span>
                    </div>

                    <span className="flex-1 pr-2 relative">
                      {/* Barre de progression */}
                      <div
                        className={`custom-progress ${progressBarColorClass}`}
                        style={{
                          width: `${(stat.base_stat / 110) * 100}%`,
                          height: "10px",
                        }}
                      ></div>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPokemon;
