import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Searchbar from "../components/SearchBar";
import { searchMovies } from "../api/tmdb";

function Search() {
  const { favorites, addFavorite, removeFavorite } = useOutletContext();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState(false);

  async function handleSearch() {
    if (!query.trim()) return;

    setLoading(true);
    setSearched(true);
    setError(false);

    try {
      const results = await searchMovies(query);
      setMovies(results || []);
    } catch (error) {
      setError(true);
      console.log("Search error:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <h1 className="px-5 py-20 text-center text-3xl font-semibold tracking-tight text-slate-100 bg-slate-950 min-h-screen">
        Something went wrong
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-6 sm:px-8 lg:px-12">
        
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <Searchbar
            query={query}
            setQuery={setQuery}
            handleSearch={handleSearch}
          />
        </div>

        {/* Heading */}
        <div className="mb-6 flex items-end justify-between border-b border-slate-800/70 pb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
              Search Results
            </h1>
          </div>
          <span className="hidden text-xs font-medium text-slate-600 sm:block">
            {movies.length} movies found
          </span>
        </div>

        {loading ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <div className="relative">
                <div className="h-11 w-11 animate-spin rounded-full border-[3px] border-slate-800 border-t-emerald-400"></div>
                <div className="absolute inset-0 rounded-full shadow-lg shadow-emerald-400/10" />
              </div>
              <h1 className="text-sm font-medium tracking-wide text-slate-400">
                Searching...
              </h1>
            </div>
          </div>
        ) : searched && movies.length === 0 ? (
          <div className="flex min-h-[50vh] items-center justify-center">
            <div className="flex max-w-md flex-col items-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/80 text-5xl shadow-xl shadow-black/20">
                😕
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-100">
                Oops! No movies found
              </h2>
              <p className="text-sm leading-6 text-slate-500">
                We couldn't find any movies matching your search.
                <br />
                Try searching with a valid movie name.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
        )}
      </div>
    </div>
  );
}

export default Search;