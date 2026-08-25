import React from "react";
import { Link } from "react-router-dom";

function MovieCard({
  movie,
  addFavorite,
  removeFavorite,
  isFavorite,
}) {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <div className="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-black/40">

          <div className="relative flex h-40 w-full items-center justify-center overflow-hidden bg-slate-900">

            {movie.poster_path ? (
              <img
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 px-4 text-center">
                <span className="mb-2 text-2xl opacity-80">🎬</span>
                <span className="text-sm font-semibold text-slate-300">
                  {movie.title}
                </span>
              </div>
            )}

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
          </div>

          <div className="p-3.5">
            <h2 className="truncate text-base font-semibold text-slate-100 transition-colors duration-200 group-hover:text-emerald-300">
              {movie.title}
            </h2>

            <div className="mt-2 flex items-center gap-1.5 text-sm">
              <span className="text-amber-400">★</span>
              <span className="text-slate-400">
                {movie.vote_average?.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => (isFavorite ? removeFavorite(movie.id) : addFavorite(movie))}
        className={`mt-2.5 w-full rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
          isFavorite
            ? "border-rose-400/20 bg-rose-500/10 text-rose-300 hover:border-rose-400/40 hover:bg-rose-500/15 hover:text-rose-200"
            : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-emerald-400/30 hover:bg-emerald-500/10 hover:text-emerald-300"
        }`}
      >
        {isFavorite ? "🤍 Remove Favourite" : "❤️ Add Favourite"}
      </button>
    </div>
  );
}

export default MovieCard;