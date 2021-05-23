import { useEffect, useState } from "react";
// interfaces
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";
// api
import movieDB from "../api/movieDB";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>("/now_playing");
    const peliculas = resp.data.results;

    setPeliculasEnCine(peliculas);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { peliculasEnCine, isLoading };
};
