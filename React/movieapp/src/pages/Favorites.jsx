import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "@/components/app/MovieCard";
import axios from "axios";
import RemoveFromFavoriteButton from "@/components/app/RemoveFromFavoriteButton";

function Favorites() {
  const fav_ids = useSelector((state) => state.favorite.ids);

  const [movies_list, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const results = await Promise.all(
        fav_ids.map((id) =>
          axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            .then((res) => res.data),
        ),
      );
      setMoviesList(results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fav_ids.length === 0) {
      setMoviesList([]);
      return;
    }

    fetchFavorites();
  }, [fav_ids]);

  if (loading) {
    return (
      <div className="px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: fav_ids.length || 4 }).map((_, i) => (
          <div
            key={i}
            className="w-full h-[420px] rounded-2xl bg-zinc-200 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (fav_ids.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-zinc-400">
        <p className="text-xl font-medium">No favorites yet</p>
        <p className="text-sm mt-1">Go to Movies and add some!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="px-6 pt-10 pb-6 border-b border-zinc-200 bg-white">
        <h1 className="text-3xl font-bold tracking-tight mb-1">Favorites</h1>
        <p className="text-zinc-500 text-sm">{fav_ids.length} saved movies</p>
      </div>

      <div className="px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies_list.map((movie_data) => (
            <div key={movie_data.id}>
              <RemoveFromFavoriteButton id={movie_data.id} />
              <Link to={`/movies/${movie_data.id}`}>
                <MovieCard movie={movie_data} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
