import React from "react";
import { useQuery } from "react-query";
import { fetchPokemon } from "../queries/pokemon";
import axios from "axios";
import { getTeams, saveTeam } from "../services/firebase/pokemon";
import { useFirebase } from "./use-firebase";

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonMove {
  name: string;
  power: number;
}

export interface Pokemon {
  name: string;
  moves: PokemonMove[];
  frontSprite: string;
  backSprite: string;
  hp: number;
}
interface PokeApiContextProps {
  pokemon: Pokemon[] | undefined;
  selectedTeam: Pokemon[];
  getNextPokemon: () => Promise<void>;
  getPreviousPokemon: () => Promise<void>;
}

const PokeApiContext = React.createContext<PokeApiContextProps>({
  pokemon: [],
  selectedTeam: [],
  getNextPokemon: () => Promise.resolve(),
  getPreviousPokemon: () => Promise.resolve(),
});

export const PokeApiContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { firebaseUser } = useFirebase();
  const [pokemonLimit, setPokemonLimit] = React.useState(20);
  const [pokemonOffset, setPokemonOffset] = React.useState(0);
  const [selectedTeam, setSelectedTeam] = React.useState<Pokemon[]>([]);
  const {
    data: pokemon,
    isLoading,
    refetch,
  } = useQuery<Pokemon[]>(["pokemon", pokemonOffset, pokemonLimit], () =>
    fetchPokemon(pokemonOffset, pokemonLimit)
  );

  const addPokemonToTeam = (pokemon: Pokemon) => {
    setSelectedTeam(selectedTeam.concat(pokemon));
  };

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
    () => ({ pokemon, getNextPokemon, getPreviousPokemon, selectedTeam }),
    [pokemon, getNextPokemon, getPreviousPokemon, selectedTeam]
  );

  React.useEffect(() => {
    async function crearEquipo() {
      const team = pokemon?.slice(0, 6);
      if (team && firebaseUser) {
        await saveTeam(team, firebaseUser);
      }
    }

    if (pokemon) crearEquipo();

    if (firebaseUser) getTeams(firebaseUser);
  }, [pokemon]);

  return (
    <PokeApiContext.Provider value={contextValue}>
      {children}
    </PokeApiContext.Provider>
  );
};

export const usePokeApi = () => React.useContext(PokeApiContext);
