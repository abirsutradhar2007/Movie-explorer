import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-slate-950 px-5 py-12 sm:py-16 rounded-xl">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/3 h-80 w-80 rounded-full bg-teal-400/[0.05] blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-10">

        {/* Left Side */}
        <div className="max-w-2xl">

          <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-100 sm:text-4xl lg:text-6xl">
            Discover Your Next
            <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Favorite Movie
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Explore thousands of movies, discover new favorites,
            and keep track of the movies you love.
          </p>

          <div className="mt-7 flex gap-3">

            <Link
              to="/favorites"
              className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-slate-800/80 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/[0.08] active:scale-95"
            >
              Favorites
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="hidden w-72 shrink-0 md:block">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80"
            alt="Movie theater"
            className="h-48 w-full rounded-2xl border border-slate-700/60 object-cover shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-emerald-500/[0.08]"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;