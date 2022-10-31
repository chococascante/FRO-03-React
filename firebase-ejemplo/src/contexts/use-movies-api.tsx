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
  nowPlayingMovies: Movie[] | undefined;
  popularMovies: Movie[] | undefined;
  topRatedMovies: Movie[] | undefined;
  upComingMovies: Movie[] | undefined;
  setMoviesPage: (page: number) => void;
}

const MoviesContext = React.createContext<MovieApiContextProps>({
  nowPlayingMovies: undefined,
  popularMovies: undefined,
  topRatedMovies: undefined,
  upComingMovies: undefined,
  setMoviesPage: () => {},
});

export const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [moviesPage, setMoviesPage] = React.useState(1);
  const { data: nowPlayingMovies } = useQuery<Movie[]>(
    ["nowPlayingMovies", moviesPage],
    () => getNowPlayingMovies(moviesPage)
  );

  const { data: popularMovies } = useQuery<Movie[]>(
    ["popularMovies", moviesPage],
    () => getPopularMovies(moviesPage)
  );

  const { data: topRatedMovies } = useQuery<Movie[]>(
    ["topRatedMovies", moviesPage],
    () => getTopRatedMovies(moviesPage)
  );

  const { data: upComingMovies } = useQuery<Movie[]>(
    ["upComingMovies", moviesPage],
    () => getUpcomingMovies(moviesPage)
  );

  const contextValue: MovieApiContextProps = React.useMemo(
    () => ({
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upComingMovies,
      setMoviesPage,
    }),
    [
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upComingMovies,
      setMoviesPage,
    ]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMovieContext = () =>
  React.useContext<MovieApiContextProps>(MoviesContext);
