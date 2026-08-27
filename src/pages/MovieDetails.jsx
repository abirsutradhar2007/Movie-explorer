import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieDetails(){
    const {id} = useParams();
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getMovie() {
            setLoading(true)
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
            )
            const data = await response.json();
            setLoading(false)
            setMovie(data);
            // console.log(data)
        }
        getMovie()
       
    }, [id])
    
    // console.log(movie)
    if (loading) {
        return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950">
            <div className="flex flex-col items-center gap-4">
        
            {/* Spinner */}
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-800 border-t-emerald-400"></div>

            {/* Loading text */}
            <h1 className="text-sm font-medium tracking-wide text-slate-400 sm:text-base">
                Loading movies...
            </h1>

            </div>
        </div>
        );
    }

    return(
        <>
        
        <div className="min-h-screen overflow-hidden border-b border-white/[0.06] bg-slate-950 px-5 py-8 text-slate-100 sm:px-8 sm:py-12">

            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 flex flex-wrap gap-3">
                    <Link to="/" className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-slate-800/80 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/[0.08] active:scale-95">
                        Back to Home
                    </Link>
                    <Link to="/Search" className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-slate-800/80 hover:text-emerald-300 hover:shadow-lg hover:shadow-emerald-500/[0.08] active:scale-95">
                        Back to Search
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-10 md:flex-row">
                {/* Poster */}
                <div className="w-full md:w-2/5 flex justify-center">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="max-h-[70vh] w-auto max-w-full rounded-2xl border border-slate-700/60 object-contain shadow-2xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-emerald-500/[0.08]"
                    />
                </div>

                {/* Movie Details */}
                <div className="w-full md:w-3/5 max-w-2xl">

                    <h1 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-100 sm:text-4xl md:text-5xl lg:text-6xl mb-6">
                        {movie.title}
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base mb-8">
                        {movie.overview}
                    </p>

                    <div className="mt-7 flex gap-3">

                        <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-5 py-3 shadow-sm">
                            <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                                Release Date
                            </p>
                            <p className="font-semibold mt-1 text-slate-200">
                                {movie.release_date}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-5 py-3 shadow-sm">
                            <p className="text-xs font-medium tracking-wide text-slate-400 uppercase">
                                Rating
                            </p>
                            <p className="font-semibold mt-1 text-emerald-300">
                                ⭐ {movie.vote_average}
                            </p>
                        </div>

                    </div>

                </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default MovieDetails