function Searchbar({
    query,
    setQuery,
    handleSearch
}){
    return(
        <>
            <div className="mb-8 flex w-full max-w-xl gap-2">
                <input
                    id="movieSearch"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { 
                        if(e.key === "Enter"){
                            handleSearch()
                        }
                    }}
                    placeholder="Search for a movie..."
                    className="flex-1 rounded-xl border border-slate-700/80 bg-slate-900/80 px-4 py-2.5 text-slate-100 placeholder:text-slate-500 outline-none shadow-sm transition-all duration-200 hover:border-slate-600 focus:border-emerald-400/60 focus:bg-slate-900 focus:ring-2 focus:ring-emerald-400/10"
                />

                <button
                onClick={handleSearch}
                className="rounded-xl border border-emerald-400/20 bg-emerald-500/15 px-5 py-2.5 font-medium text-emerald-300 shadow-sm transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/20 hover:text-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 active:scale-95"
                >
                Search
                </button>
            </div>
        </>
    )
}

export default Searchbar