import { useDispatch } from "react-redux";
import { remove } from "@/store/reducers/favoriteReducrer";

function RemoveFromFavoriteButton({ id }) {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(remove({ id }))}
        className="mb-2 w-full px-3 py-1.5 rounded-lg bg-red-100 text-red-700 text-sm font-medium hover:bg-red-200 transition-colors"
      >
        Remove From Favorite
      </button>
    </>
  );
}

export default RemoveFromFavoriteButton;
