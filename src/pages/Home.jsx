import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";

function Home() {
  const { favorites, addFavorite, removeFavorite } = useOutletContext();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    setLoading(true);
    async function getMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();

        setMovies(data.results.slice(0, 12) || []);
      } catch (error) {
        setError(true);
        console.log("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, [API_KEY]);

  if (error) {
    return (
      <h1 className="px-5 py-20 text-center text-3xl font-semibold tracking-tight text-slate-100">
        Something went wrong fetching popular movies.
      </h1>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-5">
          <div className="relative">
            <div className="h-11 w-11 animate-spin rounded-full border-[3px] border-slate-800 border-t-emerald-400"></div>
            <div className="absolute inset-0 rounded-full shadow-lg shadow-emerald-400/10" />
          </div>
          <h1 className="text-sm font-medium tracking-wide text-slate-400">
            Loading movies...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-950">
  <div className="mx-auto max-w-7xl px-3 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-12">
    
    {/* Hero */}
    <div className="mb-7 overflow-hidden rounded-2xl border border-slate-800/70 shadow-2xl shadow-black/20 sm:mb-10 sm:rounded-3xl">
      <Hero />
    </div>

    {/* Movie Section Heading */}
    <div className="mb-5 flex items-end justify-between border-b border-slate-800/70 pb-3 sm:mb-6 sm:pb-4">
      <div>
        <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-400 sm:text-xs">
            Explore
          </span>
        </div>

        <h1 className="text-xl font-bold tracking-tight text-slate-100 sm:text-3xl">
          Popular Movies
        </h1>
      </div>

      <span className="hidden text-xs font-medium text-slate-600 sm:block">
        {movies.length} movies
      </span>
    </div>

    {/* Popular Movies Grid */}
    <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-7 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => {
            const isFavorite = favorites.some((fav) => fav.id === movie.id);
            return (
              <MovieCard
                key={movie.id}
                movie={movie}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorite={isFavorite}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;