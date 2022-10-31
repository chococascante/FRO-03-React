/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemon
// ====================================================

export interface GetPokemon_pokemons_results {
  __typename: "PokemonItem";
  id: number | null;
  name: string | null;
  image: string | null;
  url: string | null;
}

export interface GetPokemon_pokemons {
  __typename: "PokemonList";
  results: (GetPokemon_pokemons_results | null)[] | null;
}

export interface GetPokemon {
  pokemons: GetPokemon_pokemons | null;
}
