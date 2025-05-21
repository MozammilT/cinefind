import { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Search from "./Search";
import Moviecard from "./Moviecard";
// import AlertDialog from "./MovieModal";
import { searchCount, getTrendingMovies } from "../library/appwrite";
import Pagination from "./Pagination";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "/appilcation/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const [trendingMovieLoading, setTrendingMovieLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingMovieError, setTrendingMovieError] = useState("");

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    1000,
    [searchTerm]
  );

  const fetchMovies = async (query = "") => {
    try {
      setLoading(true);
      setError("");
      const endPoint = query
        ? `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${BASE_URL}/discover/movie?sort_by=popularity.desc&page=${currentPage}`;
      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.Response === "false") {
        setError(data.Error || "Failed to fetch data");
        setMovies([]);
        return;
      }

      setMovies(data.results || []);

      if (query && data.results.length > 0) {
        searchCount(query, data.results[0]);
      }
      console.log("API Data - ", data);
    } catch (err) {
      console.log("Error fetching movies - ", err);
      setError("Error fetching movies, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchTrendingMovies = async () => {
    try {
      setTrendingMovieLoading(true);
      setTrendingMovieError("");
      const popularMovies = await getTrendingMovies();
      setTrendingMovies(popularMovies);
    } catch (err) {
      console.log("Error getting trending movies", err);
      setTrendingMovieError("Error fetching trending movies, try again later");
    } finally {
      setTrendingMovieLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchMovies(debouncedSearchTerm, 1);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm !== "") {
      fetchMovies(debouncedSearchTerm, currentPage);
    } else {
      fetchMovies("", currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="hero.png" />
          <h1>
            Find the <span className="text-gradient"> Movies </span> you'll
            Enjoy Without Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {trendingMovieLoading ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress sx={{ color: "indigo" }} />
          </Box>
        ) : trendingMovieError ? (
          <p className="text-2xl text-red-600">{trendingMovieError}</p>
        ) : (
          trendingMovies.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>
              <ul>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.$id}>
                    <p>{index + 1}</p>
                    <img src={movie.poster_url} />
                  </li>
                ))}
              </ul>
            </section>
          )
        )}

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          <ul>
            {loading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress sx={{ color: "indigo" }} />
              </Box>
            ) : error ? (
              <p className="text-2xl text-red-600">{error}</p>
            ) : (
              movies.map((movie, id) => <Moviecard key={id} movie={movie} />)
            )}
          </ul>
        </section>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </main>
  );
}

export default Home;
