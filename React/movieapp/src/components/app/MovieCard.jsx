import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Calendar, Globe, TrendingUp } from "lucide-react";

const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

function ScoreRing({ score }) {
  const pct = score / 10;
  const r = 18;
  const circ = 2 * Math.PI * r;
  const color = score >= 7.5 ? "#16a34a" : score >= 6 ? "#d97706" : "#dc2626";

  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <svg width="48" height="48" viewBox="0 0 48 48" className="-rotate-90">
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke="#00000015"
          strokeWidth="3"
        />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - pct)}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-bold text-zinc-800">
        {score.toFixed(1)}
      </span>
    </div>
  );
}

export default function MovieCard({ movie }) {
  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    vote_count,
    genre_ids = [],
    original_language,
    popularity,
  } = movie;

  const posterUrl = poster_path ? `${IMAGE_BASE_URL}w342${poster_path}` : null;
  const backdropUrl = backdrop_path
    ? `${IMAGE_BASE_URL}w780${backdrop_path}`
    : null;

  const year = release_date ? new Date(release_date).getFullYear() : "—";
  const genres = genre_ids.slice(0, 3).map((id) => GENRE_MAP[id]);

  return (
    <Card className="w-full overflow-hidden bg-white pt-0 text-zinc-900 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
      {/* Backdrop */}
      <div className="relative h-44">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zinc-100" />
        )}

        {/* Gradient fading backdrop into white card body */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        {/* Score ring */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
          <ScoreRing score={vote_average} />
        </div>

        {/* Poster overlapping */}
        <div className="absolute -bottom-3 left-4">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={title}
              className="w-16 h-24 object-cover rounded-lg border-2 border-white shadow-lg"
            />
          ) : (
            <div className="w-16 h-24 rounded-lg border-2 border-white bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs text-center px-1 shadow-lg">
              No image
            </div>
          )}
        </div>
      </div>

      <CardContent className="pb-5 px-4 space-y-3">
        {/* Title */}
        <h2 className="text-base font-semibold leading-tight pr-10 line-clamp-2 text-zinc-900">
          {title}
        </h2>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {year}
          </span>
          <span className="flex items-center gap-1">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            {vote_average.toFixed(1)}
            <span className="text-zinc-400">
              ({vote_count.toLocaleString()})
            </span>
          </span>
          <span className="flex items-center gap-1 uppercase">
            <Globe size={12} /> {original_language}
          </span>
          <span className="flex items-center gap-1 text-emerald-600">
            <TrendingUp size={12} />
            {Math.round(popularity).toLocaleString()}
          </span>
        </div>

        {/* Genres */}
        {genres.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {genres.map((g) => (
              <Badge
                key={g}
                variant="secondary"
                className="text-[11px] px-2 py-0.5 bg-zinc-100 text-zinc-600 border border-zinc-200 hover:bg-zinc-200 rounded-full"
              >
                {g}
              </Badge>
            ))}
          </div>
        )}

        {/* Overview */}
        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3 h-10 overflow-hidden">
          {overview}
        </p>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
