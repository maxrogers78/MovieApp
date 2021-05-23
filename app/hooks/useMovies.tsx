import { useEffect, useState } from "react";
// interfaces
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";
// api
import movieDB from "../api/movieDB";

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);
  const [peliculasTop, setPeliculasTop] = useState<Movie[]>([]);
  const [peliculasPorSalir, setPeliculasPorSalir] = useState<Movie[]>([]);

  const getMovies = async () => {
    const respNowPlaying = await movieDB.get<MovieDBNowPlaying>("/now_playing");
    const respPopular = await movieDB.get<MovieDBNowPlaying>("/popular");
    const respTopRated = await movieDB.get<MovieDBNowPlaying>("/top_rated");
    const respUpcoming = await movieDB.get<MovieDBNowPlaying>("/upcoming");

    const peliculasNowPlaying = respNowPlaying.data.results;
    const peliculasPopular = respPopular.data.results;
    const peliculasTopRated = respTopRated.data.results;
    const peliculasUpcoming = respUpcoming.data.results;

    setPeliculasEnCine(peliculasNowPlaying);
    setPeliculasPopulares(peliculasPopular);
    setPeliculasTop(peliculasTopRated);
    setPeliculasPorSalir(peliculasUpcoming);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    peliculasPopulares,
    peliculasTop,
    peliculasPorSalir,
    isLoading,
  };
};
