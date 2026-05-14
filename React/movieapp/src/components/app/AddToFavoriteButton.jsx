import { useDispatch } from "react-redux";
import { add } from "@/store/reducers/favoriteReducrer";

function AddToFavoriteButton({ id }) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(add({ id }))}
        className="mb-2 w-full px-3 py-1.5 rounded-lg bg-green-100 text-green-700 text-sm font-medium hover:bg-green-200 transition-colors"
      >
        Add To Favorite
      </button>
    </>
  );
}

export default AddToFavoriteButton;
