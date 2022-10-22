import React from "react";
import { useQuery } from "react-query";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../queries/movies";

interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface MovieApiContextProps {
  nowPlayingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upComingMovies: Movie[];
}

const MoviesContext = React.createContext<MovieApiContextProps>({
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
});

export const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [moviesPage, setMoviesPage] = React.useState(1);
  const { data: nowPlayingMovies } = useQuery(
    ["nowPlayingMovies", moviesPage],
    () => getNowPlayingMovies(moviesPage)
  );

  const { data: popularMovies } = useQuery(["popularMovies", moviesPage], () =>
    getPopularMovies(moviesPage)
  );

  const { data: topRatedMovies } = useQuery(
    ["topRatedMovies", moviesPage],
    () => getTopRatedMovies(moviesPage)
  );

  const { data: upComingMovies } = useQuery(
    ["upComingMovies", moviesPage],
    () => getUpcomingMovies(moviesPage)
  );

  const contextValue: MovieApiContextProps = React.useMemo(
    () => ({
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upComingMovies,
    }),
    [nowPlayingMovies, popularMovies, topRatedMovies, upComingMovies]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
