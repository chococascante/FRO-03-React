import React from "react";
import { usePokeApi } from "../../contexts/use-pokemon-api";

export const NextButton = () => {
  const { getNextPokemon } = usePokeApi();
  return <button onClick={getNextPokemon}>NextButton</button>;
};
