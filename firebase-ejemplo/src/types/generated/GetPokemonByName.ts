/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPokemonByName
// ====================================================

export interface GetPokemonByName_pokemon_abilities_ability {
  __typename: "BaseName";
  id: number | null;
  url: string | null;
  name: string | null;
}

export interface GetPokemonByName_pokemon_abilities {
  __typename: "Ability";
  ability: GetPokemonByName_pokemon_abilities_ability | null;
}

export interface GetPokemonByName_pokemon {
  __typename: "Pokemon";
  id: number | null;
  name: string | null;
  abilities: (GetPokemonByName_pokemon_abilities | null)[] | null;
}

export interface GetPokemonByName {
  pokemon: GetPokemonByName_pokemon | null;
}

export interface GetPokemonByNameVariables {
  name: string;
}
