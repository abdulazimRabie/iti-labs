import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/reducers/counterReducer";
import { useEffect } from "react";

export default function AppCounter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(increment.toString());
    console.log(decrement);
  }, []);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => dispatch(increment({ amount: 2 }))}>+</button>
      <button onClick={() => dispatch(decrement({ amount: 2 }))}>-</button>
    </>
  );
}
