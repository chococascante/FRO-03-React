import { useMovieContext } from "../../contexts/use-movies-api";
import { Pagination } from "@mui/material";

export const HomeNowPlayingMovies = () => {
  const {
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upComingMovies,
    setMoviesPage,
  } = useMovieContext();

  if (!nowPlayingMovies) return <p>Cargando...</p>;

  if (nowPlayingMovies.length === 0) return <p>No hay peliculas</p>;

  return (
    <ul>
      {nowPlayingMovies?.map((movie) => (
        <li key={movie.id}>
          <p>{movie.title}</p>
          <img
            src={`${process.env.REACT_APP_MOVIES_IMAGE_ENDPOINT}${movie.backdrop_path}`}
          />
        </li>
      ))}
      <Pagination onChange={(_, pageNumber) => setMoviesPage(pageNumber)} />
    </ul>
  );
};
