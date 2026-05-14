const IMAGE_BASE = "https://image.tmdb.org/t/p/";

function CastCard({ person }) {
    const photo = person.profile_path
      ? `${IMAGE_BASE}w185${person.profile_path}`
      : null;
    return (
      <div className="flex-shrink-0 w-24 text-center">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-zinc-100 border border-zinc-200 mb-2">
          {photo
            ? <img src={photo} alt={person.name} className="w-full h-full object-cover" />
            : <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xl font-semibold">
                {person.name?.[0]}
              </div>
          }
        </div>
        <p className="text-xs font-medium text-zinc-800 line-clamp-1">{person.name}</p>
        <p className="text-[10px] text-zinc-400 line-clamp-1">{person.character}</p>
      </div>
    );
}

export default CastCard;