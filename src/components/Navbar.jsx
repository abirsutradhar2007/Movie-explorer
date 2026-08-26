import { Link, useLocation } from "react-router-dom"

function Navbar({ favorites }) {
const location = useLocation()

return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 px-4 py-4 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

            {/* Logo */}
            <Link
                to="/"
                className="group flex items-center gap-2 rounded-lg px-2 py-1 text-xl font-bold tracking-tight text-white transition-all duration-200 hover:text-blue-400 active:scale-95"
            >
                <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                    🎬
                </span>

                <span>
                    Movie<span className="text-blue-400">App</span>
                </span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
                <Link
                 to="/"
                state={{ fromHome: true }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                location.pathname === "/"
                ? "bg-white/10 text-white shadow-sm"
                 : "text-slate-400 hover:bg-white/5 hover:text-white"
                 }`}
                >
                Home
                </Link>

                <Link
                 to="/search"
                state={{ fromHome: true }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                location.pathname === "/search"
                ? "bg-white/10 text-white shadow-sm"
                 : "text-slate-400 hover:bg-white/5 hover:text-white"
                 }`}
                >
                search
                </Link>

                <Link
                    to="/favorites"
                    className={`group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                        location.pathname === "/favorites"
                            ? "bg-blue-500/15 text-blue-400"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                >
                    <span>Favorites</span>

                    <span
                        className={`min-w-6 rounded-full px-2 py-0.5 text-center text-xs font-semibold transition-colors ${
                            location.pathname === "/favorites"
                                ? "bg-blue-500 text-white"
                                : "bg-slate-800 text-slate-300 group-hover:bg-slate-700"
                        }`}
                    >
                        {favorites.length}
                    </span>
                </Link>
            </nav>

        </div>
    </header>
)

}

export default Navbar