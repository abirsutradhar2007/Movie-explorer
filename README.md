# Movie Explorer

Movie Explorer is a React application for discovering popular movies, searching the TMDB catalog, viewing movie details, and saving favorites for later. Favorite movies are stored in the browser, so they remain available between visits on the same device.

## Features

- Browse a selection of popular movies from TMDB
- Search for movies by title
- Open a dedicated details page for a movie
- Add and remove movies from a personal favorites list
- Persist favorites with `localStorage`
- Responsive interface for desktop and mobile screens

## Built With

- React 19
- React Router
- Vite
- Tailwind CSS
- The Movie Database (TMDB) API

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A TMDB API key

### Installation

1. Clone or download this repository.
2. Open a terminal in the project directory.
3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can request an API key from the [TMDB developer portal](https://www.themoviedb.org/settings/api). Restart the development server after changing environment variables.

### Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot module replacement |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Popular movies and the home hero section |
| `/search` | Search movies by title |
| `/movie/:id` | Details for a selected movie |
| `/favorites` | Movies saved to the favorites list |

## Project Structure

```text
src/
├── api/             TMDB API helpers
├── components/      Shared UI components
├── pages/           Route-level views
├── App.jsx          Shared layout and favorites state
├── index.css        Global styles
└── main.jsx         Application entry point and routes
```

## API and Data

Movie data is fetched from TMDB at runtime. The API key is read from the Vite environment variable `VITE_TMDB_API_KEY` and should not be committed to source control. Favorites are stored locally under the `favorites` browser storage key; no user account or server-side storage is required.

This product uses the TMDB API but is not endorsed or certified by TMDB.
