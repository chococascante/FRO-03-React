import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {
  GetPokemonByName,
  GetPokemonByNameVariables,
} from "../types/generated/GetPokemonByName";

export const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          id
          url
          name
        }
      }
    }
  }
`;

export const useGetPokemonByName = (name: string) =>
  useQuery<GetPokemonByName, GetPokemonByNameVariables>(GET_POKEMON_BY_NAME, {
    variables: { name },
  });
