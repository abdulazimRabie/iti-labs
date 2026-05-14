import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

import axios from "axios";

import MovieCard from "@/components/app/MovieCard";
import CastCard from "@/components/app/CastCard";
import ScoreRing from "@/components/app/ScoreRing";
import StatPill from "@/components/app/StatPill";

import { formatMoney, formatRuntime } from "@/lib/format";

import {
  Clock,
  Calendar,
  Globe,
  TrendingUp,
  ArrowLeft,
  DollarSign,
} from "lucide-react";

const IMAGE_BASE = "https://image.tmdb.org/t/p/";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (!id) return;

    // https://api.themoviedb.org/3/movie/1226863?api_key=58bc9570a9c178c17620422b4e2fe053
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
    const recsUrl = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;

    console.log(id);

    Promise.all([
      axios.get(movieUrl),
      axios.get(creditsUrl),
      axios.get(recsUrl),
    ])
      .then(([movieRes, creditsRes, recsRes]) => {
        setMovie(movieRes.data);
        setCast(creditsRes.data.cast?.slice(0, 12) ?? []);
        setRecommendations(recsRes.data.results?.slice(0, 6) ?? []);
      })
      .catch(() => {})
      .finally(() => {});
  }, [id]);

  /* ── Loading skeleton ── */
  // if (loading) return (
  //   <div className="min-h-screen bg-zinc-50 animate-pulse">
  //     <div className="h-72 bg-zinc-200 w-full" />
  //     <div className="max-w-5xl mx-auto px-6 pt-8 space-y-4">
  //       <div className="h-8 bg-zinc-200 rounded w-1/2" />
  //       <div className="h-4 bg-zinc-200 rounded w-1/3" />
  //       <div className="h-24 bg-zinc-200 rounded w-full mt-6" />
  //     </div>
  //   </div>
  // );

  // if (error) return (
  //   <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
  //     <p className="text-zinc-500">{error}</p>
  //   </div>
  // );

  if (!movie) return null;

  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE}original${movie.backdrop_path}`
    : null;
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE}w342${movie.poster_path}`
    : null;

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* ── Hero backdrop ── */}
      <div className="relative w-full h-80 overflow-hidden">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-200" />
        )}
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/60 to-transparent" />

        {/* Back button */}
        <Link
          to="/movies"
          className="absolute top-5 left-5 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm text-zinc-700 text-sm font-medium px-3 py-1.5 rounded-full border border-zinc-200 hover:bg-white transition-colors"
        >
          <ArrowLeft size={14} /> Back
        </Link>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10">
        {/* Poster + Info row */}
        <div className="flex gap-7 items-end mb-8">
          {/* Poster */}
          {posterUrl && (
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-36 rounded-2xl border-2 border-white shadow-xl flex-shrink-0"
            />
          )}

          {/* Title block */}
          <div className="pb-2 flex-1 min-w-0">
            <h1 className="text-3xl font-bold leading-tight text-zinc-900 mb-1">
              {movie.title}
            </h1>
            {movie.tagline && (
              <p className="text-zinc-400 italic text-sm mb-3">
                "{movie.tagline}"
              </p>
            )}
            <div className="flex flex-wrap gap-1.5">
              {movie.genres?.map((g) => (
                <Badge
                  key={g.id}
                  className="bg-zinc-100 text-zinc-600 border border-zinc-200 rounded-full text-xs hover:bg-zinc-200"
                >
                  {g.name}
                </Badge>
              ))}
            </div>
          </div>

          {/* Score */}
          <div className="flex-shrink-0 flex flex-col items-center gap-1 pb-2">
            <ScoreRing score={movie.vote_average} size={72} />
            <span className="text-[10px] text-zinc-400">
              {movie.vote_count?.toLocaleString()} votes
            </span>
          </div>
        </div>

        {/* Stat pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <StatPill
            icon={Calendar}
            label="Release"
            value={movie.release_date ?? "N/A"}
          />
          <StatPill
            icon={Clock}
            label="Runtime"
            value={formatRuntime(movie.runtime)}
          />
          <StatPill
            icon={DollarSign}
            label="Budget"
            value={formatMoney(movie.budget)}
          />
          <StatPill
            icon={TrendingUp}
            label="Revenue"
            value={formatMoney(movie.revenue)}
          />
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-3">
            Overview
          </h2>
          <p className="text-zinc-700 leading-relaxed text-base">
            {movie.overview}
          </p>
        </section>

        {/* Extra info row */}
        <div className="flex flex-wrap gap-5 text-sm text-zinc-500 mb-10 border-t border-zinc-200 pt-5">
          <span>
            <span className="font-medium text-zinc-700">Status</span>:{" "}
            {movie.status}
          </span>
          <span>
            <span className="font-medium text-zinc-700">Language</span>:{" "}
            {movie.original_language?.toUpperCase()}
          </span>
          {movie.production_companies?.[0] && (
            <span>
              <span className="font-medium text-zinc-700">Studio</span>:{" "}
              {movie.production_companies[0].name}
            </span>
          )}
          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              <Globe size={13} /> Official Site
            </a>
          )}
        </div>

        {/* Cast */}
        {cast.length > 0 && (
          <section className="mb-10">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              Cast
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-200">
              {cast.map((person) => (
                <CastCard key={person.cast_id ?? person.id} person={person} />
              ))}
            </div>
          </section>
        )}

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {recommendations.map((rec) => (
                <Link
                  key={rec.id}
                  to={`/movies/${rec.id}`}
                  className="cursor-pointer"
                >
                  <MovieCard movie={rec} />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default MoviePage;
