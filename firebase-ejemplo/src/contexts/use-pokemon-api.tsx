import React from "react";
import { useQuery } from "react-query";
import { fetchPokemon } from "../queries/pokemon";

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokeApiContextProps {
  pokemon: PokemonListItem[];
  getNextPokemon: () => Promise<void>;
  getPreviousPokemon: () => Promise<void>;
}

const PokeApiContext = React.createContext<PokeApiContextProps>({
  pokemon: [],
  getNextPokemon: () => Promise.resolve(),
  getPreviousPokemon: () => Promise.resolve(),
});

export const PokeApiContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [pokemon, setPokemon] = React.useState([]);
  const [pokemonLimit, setPokemonLimit] = React.useState(20);
  const [pokemonOffset, setPokemonOffset] = React.useState(0);
  const { data, isLoading, refetch } = useQuery(
    ["pokemon", pokemonOffset, pokemonLimit],
    () => fetchPokemon(pokemonOffset, pokemonLimit)
  );

  console.log(data);

  const getNextPokemon = React.useCallback(async () => {
    try {
      const newOffSet = pokemonOffset + pokemonLimit;
      setPokemonOffset(newOffSet);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getPreviousPokemon = React.useCallback(async () => {
    try {
      const newOffSet = pokemonOffset - pokemonLimit;
      if (newOffSet < 0) return;
      setPokemonOffset(newOffSet);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const contextValue: PokeApiContextProps = React.useMemo(
    () => ({ pokemon, getNextPokemon, getPreviousPokemon }),
    [pokemon, getNextPokemon, getPreviousPokemon]
  );

  return (
    <PokeApiContext.Provider value={contextValue}>
      {children}
    </PokeApiContext.Provider>
  );
};

export const usePokeApi = () => React.useContext(PokeApiContext);
