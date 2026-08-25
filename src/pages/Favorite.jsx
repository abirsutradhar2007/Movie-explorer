import MovieCard from "../components/MovieCard";
import { useOutletContext } from "react-router-dom";

function Favourite() {
  const { favorites, addFavorite, removeFavorite } = useOutletContext();

  return (
    <div className="relative min-h-full overflow-hidden bg-slate-950 px-5 py-10 sm:px-8 sm:py-12 lg:px-12">

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-emerald-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mb-9">
          <div className="flex items-center justify-between">

            <div>
              

              <h1 className="text-3xl font-bold tracking-tight text-emerald-400 sm:text-4xl">
                My Favorites
              </h1>

              <p className="mt-2 text-sm text-white sm:text-base">
                Movies you don't want to forget
              </p>
            </div>

          </div>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {favorites.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorite={true}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center">

            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-rose-400/10 bg-rose-500/[0.06] text-4xl shadow-lg shadow-black/20">
              ❤️
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
              No Favorites Yet
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              You haven't added any movies to your favorites yet. Start exploring
              movies and save the ones you love!
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Favourite;

// {searched ? "Search Results" : "Popular Movies"}