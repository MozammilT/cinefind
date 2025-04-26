import { useContext, useState, useEffect, createContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addTofavourites = (movie) => {
    setFavourites((prevValue) => [...prevValue, movie]);
  };

  const removeFromFavourite = (movieId) => {
    setFavourites((prevValue) =>
      prevValue.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavourite = (movieId) => {
    return favourites.some((movie) => movieId === movie.id);
  };

  const value = {
    favourites,
    addTofavourites,
    removeFromFavourite,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
