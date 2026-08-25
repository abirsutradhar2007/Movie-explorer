export async function searchMovies(query) {
    console.log(query)
    const responses = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`
    )
    
    const data = await responses.json();
    console.log(data)
    return data.results;
}