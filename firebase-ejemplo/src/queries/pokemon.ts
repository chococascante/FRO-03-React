import axios from "axios";
import { Pokemon, PokemonListItem } from "../contexts/use-pokemon-api";

export const fetchPokemon = async (offSet: number, limit: number) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`
  );

  const pokemonList = await Promise.all(
    data?.results?.map((pokemon: PokemonListItem) => getPokemonInfo(pokemon))
  );

  return pokemonList;
};

const getPokemonInfo = async (pokemon: PokemonListItem) => {
  try {
    const response = await axios.get(pokemon.url);
    return parsePokemon(response.data);
  } catch (error) {
    console.log(error);
  }
};

const parsePokemon = (pokemon: any): Pokemon => {
  return {
    name: pokemon.name,
    moves: pokemon.moves.map((move: any) => ({
      name: move.move.name,
      power: move.move.power ?? null,
    })),
    frontSprite: pokemon.sprites.front_default,
    backSprite: pokemon.sprites.back_default,
    hp: pokemon.stats[0].base_stat,
  };
};
