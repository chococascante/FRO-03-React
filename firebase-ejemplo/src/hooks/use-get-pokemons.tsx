import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { GetPokemon } from "../types/generated/GetPokemon";

export const GET_POKEMONS = gql`
  query GetPokemon {
    pokemons {
      results {
        id
        name
        image
        url
      }
    }
  }
`;

export const useGetPokemons = () => useQuery<GetPokemon>(GET_POKEMONS);
