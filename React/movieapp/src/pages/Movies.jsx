import MovieCard from "@/components/app/MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import RemoveFromFavoriteButton from "@/components/app/RemoveFromFavoriteButton";
import AddToFavoriteButton from "@/components/app/AddToFavoriteButton";
import { AppPagination } from "@/components/app/AppPagination";

const CATEGORIES = ["popular", "top_rated", "upcoming", "now_playing"];

function Movies() {
  const [movies_list, setMoviesList] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const keyword = searchParams.get("category") || "popular";

  const ids = useSelector((state) => state.favorite.ids);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    // setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${keyword}?api_key=${API_KEY}&page=${page}`,
      )
      .then((response) => {
        setMoviesList(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [keyword, page]);

  const handleCategory = (cat) => {
    setSearchParams({ category: cat, page: 1 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePage = (newPage) => {
    setSearchParams({ category: keyword, page: newPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="px-6 pt-10 pb-6 border-b border-zinc-200 bg-white">
        <h1 className="text-3xl font-bold tracking-tight mb-1 text-zinc-900">
          Movies
        </h1>
        <p className="text-zinc-500 text-sm">
          Browse the latest and greatest films
        </p>
      </div>

      <div className="px-6 py-5 bg-white border-b border-zinc-200 flex gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors
              ${
                keyword === cat
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
              }`}
          >
            {cat.replace("_", " ")}
          </button>
        ))}
      </div>

      <div className="px-6 py-8">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-105 rounded-2xl bg-zinc-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies_list.map((movie_data) => (
              <div key={movie_data.id}>
                {ids.includes(movie_data.id) ? (
                  <RemoveFromFavoriteButton id={movie_data.id} />
                ) : (
                  <AddToFavoriteButton id={movie_data.id} />
                )}
                <Link to={`/movies/${movie_data.id}`}>
                  <MovieCard movie={movie_data} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <AppPagination
        total={totalPages}
        current={page}
        onPageChange={handlePage}
      />
    </div>
  );
}

export default Movies;
