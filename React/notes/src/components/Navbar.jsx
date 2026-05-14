import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <h1>Log in as a user</h1>
          <button onClick={() => dispatch({ type: "user/login" })}>
            Log In
          </button>
        </>
      ) : (
        <>
          <h1>User : {user ? user : "guest"}</h1>
          <h1>Is Logged In : {isLoggedIn ? "yes" : "no"}</h1>
          <button onClick={() => dispatch({ type: "user/logout" })}>
            Log Out
          </button>
        </>
      )}
    </>
  );
}
