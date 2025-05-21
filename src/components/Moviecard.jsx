import * as React from "react";
import { useMovieContext } from "../context/MovieContext";
import AlertDialog from "./MovieModal";

function Moviecard({ movie }) {
  const {
    original_language,
    poster_path,
    release_date,
    title,
    vote_average,
    id,
  } = movie;

  const { addTofavourites, removeFromFavourite, isFavourite } =
    useMovieContext();
  const [open, setOpen] = React.useState(false);

  const fav = isFavourite(id);

  function handleFav(e) {
    e.stopPropagation();
    if (fav) {
      removeFromFavourite(id);
    } else {
      addTofavourites(movie);
    }
  }

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="movie-card group" onClick={handleClickOpen}>
        <div className="relative">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : "no-movie.png"
            }
            className="w-full rounded-lg h-auto relative z-0"
          />
          <div className="overlay">
            <button onClick={handleFav} className="fav-btn">
              {fav ? "♥️" : "🤍"}
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h3>{title}</h3>
          <div className="content">
            <div className="rating">
              <img src="star.svg" />
              <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
              <span className="test-white">•</span>
              <p className="lang">
                {original_language.charAt(0).toUpperCase() +
                  original_language.slice(1)}
              </p>
              <span className="test-white">•</span>
              <p className="year">
                {release_date ? release_date.split("-")[0] : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog open={open} handleClose={handleClose} movie={movie} />
    </>
  );
}

export default Moviecard;
