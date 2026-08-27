import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950 text-slate-300">

      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:py-12">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">

          {/* About */}
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-xl font-bold tracking-tight text-slate-100 transition-all duration-200 hover:text-emerald-300 active:scale-95"
            >
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                🎬
              </span>

              <span>
                Movie<span className="text-emerald-400">Mate</span>
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Discover amazing movies, explore popular titles, and find
              something perfect to watch. Save your favorite movies and
              keep your personal collection all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                to="/"
                className="w-fit text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-emerald-300 active:scale-95"
              >
                Home
              </Link>

              <Link
                to="/favorites"
                className="w-fit text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-emerald-300 active:scale-95"
              >
                Favorites
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact Us
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-500">
              <p>
                <span className="mr-2">📧</span>
                <a
                  href="mailto:contact@movieapp.com"
                  className="transition-colors duration-200 hover:text-emerald-300"
                >
                  abirslg@gmail.com
                </a>
              </p>

              <p className=">mr-2 transition-colors duration-200 text-slate-500">
                
                📞 tel:+911234567890
              </p>

              <p>
                <span className="mr-2">📍</span>
                India
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800/70 pt-5 text-xs text-slate-600 sm:flex-row">
          <p>© 2026 MovieApp. All rights reserved.</p>

          <p className="transition-colors duration-200 hover:text-slate-400">
            Made with ❤️ for movie lovers
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;