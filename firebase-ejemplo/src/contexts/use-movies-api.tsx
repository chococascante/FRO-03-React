import React from "react";

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
  movies: Movie[];
  getNowPlayingMovies: () => Promise<void>;
  getPopularMovies: () => Promise<void>;
  getTopRatedMovies: () => Promise<void>;
  getUpcomingMovies: () => Promise<void>;
}

const MoviesContext = React.createContext<MovieApiContextProps>({
  movies: [],
  getNowPlayingMovies: () => Promise.resolve(),
  getPopularMovies: () => Promise.resolve(),
  getTopRatedMovies: () => Promise.resolve(),
  getUpcomingMovies: () => Promise.resolve(),
});

export const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [moviesPage, setMoviesPage] = React.useState(1);

  const getNowPlayingMovies = React.useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MOVIES_ENDPOINT}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=${moviesPage}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getPopularMovies = React.useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MOVIES_ENDPOINT}/movie/popular?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=${moviesPage}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getTopRatedMovies = React.useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MOVIES_ENDPOINT}/movie/top_rated?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=${moviesPage}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUpcomingMovies = React.useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MOVIES_ENDPOINT}/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=${moviesPage}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const contextValue: MovieApiContextProps = React.useMemo(
    () => ({
      movies,
      getNowPlayingMovies,
      getPopularMovies,
      getTopRatedMovies,
      getUpcomingMovies,
    }),
    [
      movies,
      getNowPlayingMovies,
      getPopularMovies,
      getTopRatedMovies,
      getUpcomingMovies,
    ]
  );

  return (
    <MoviesContext.Provider value={contextValue}>
      {children}
    </MoviesContext.Provider>
  );
};
