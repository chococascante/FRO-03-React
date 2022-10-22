import React from "react";

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

  const getPokemon = React.useCallback(
    async (offSet: number = pokemonOffset, limit: number = pokemonLimit) => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${offSet}&limit=${limit}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const getNextPokemon = React.useCallback(async () => {
    try {
      const newOffSet = pokemonOffset + pokemonLimit;
      await getPokemon(newOffSet);
      setPokemonOffset(newOffSet);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getPreviousPokemon = React.useCallback(async () => {
    try {
      const newOffSet = pokemonOffset - pokemonLimit;
      if (newOffSet < 0) return;
      await getPokemon(newOffSet);
      setPokemonOffset(newOffSet);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getPokemon();
  }, []);

  const contextValue = React.useMemo(
    () => ({ pokemon, getNextPokemon, getPreviousPokemon }),
    [pokemon]
  );

  return (
    <PokeApiContext.Provider value={contextValue}>
      {children}
    </PokeApiContext.Provider>
  );
};

export const usePokeApi = () => React.useContext(PokeApiContext);
