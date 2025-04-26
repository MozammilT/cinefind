// import "../styles/Favourite.css";
import Moviecard from "./Moviecard";
import { useMovieContext } from "../context/MovieContext";

function Favourite() {
  const { favourites } = useMovieContext();

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <section className="all-movies">
          {favourites.length > 0 ? (
            <>
              <h2 className="mt-[40px]">
                <span className="text-gradient"> Favourite </span>Movies
              </h2>
              <ul>
                {favourites.map((movie, id) => (
                  <Moviecard key={id} movie={movie} />
                ))}
              </ul>
            </>
          ) : (
            <div className="fav-empty">
              <h1>
                No <span className="text-gradient"> Favourite </span> Movies yet
              </h1>
              <p className="fav-empty-p">
                Start adding movies to your favourites list and they will appear
                here
              </p>
              <p>I love you Asifa ❤️</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default Favourite;
