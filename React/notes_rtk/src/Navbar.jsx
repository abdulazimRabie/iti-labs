import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logout } from "./store/reducers/userReducer";

export default function Nabvar() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (userState.isLoading) return <p>Loading...</p>;
  if (userState.error) return <p>Error: {userState.error}</p>;

  return (
    <>
      {userState.isLoggedIn ? (
        <>
          <h1>HI {userState.user.firstName}</h1>
          <button onClick={() => dispatch(logout())}>Log out</button>
        </>
      ) : (
        <button onClick={() => dispatch(fetchUser())}>Log in</button>
      )}
    </>
  );
}
