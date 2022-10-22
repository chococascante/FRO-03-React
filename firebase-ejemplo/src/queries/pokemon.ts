import axios from "axios";

export const fetchPokemon = async (offSet: number, limit: number) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`
  );
  return data;
};
