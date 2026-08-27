import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
function App() {
  const [searchState, setSearchState] = useState({
    query: "",
    movies: [],
    searched: false,
  });
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    }
    return [];
  });

  function addFavorite(movie) {
    setFavorites((prevFavorites) => {
      const exists = prevFavorites.find((fav) => fav.id === movie.id);

      if (exists) {
        alert("Movie already exists in favorites!");
        return prevFavorites;
      }

      const updatedFavorites = [...prevFavorites, movie];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }

  function removeFavorite(id) {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((movie) => movie.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <ScrollTop/>
      {/* Navigation Header to prevent manual page reloads */}
      <Navbar favorites={favorites}/>

      <main className="flex-grow">
        <Outlet
          context={{
            favorites,
            addFavorite,
            removeFavorite,
            searchState,
            setSearchState,
          }}
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;