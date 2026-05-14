import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  }, []);

  const handleIncrementDispatch = () => {
    dispatch({ type: "counter/increment", payload: { amount: 2 } });
  };

  const handleDecrementDispatch = () => {
    dispatch({ type: "counter/decrement", payload: { amount: 2 } });
  };

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrementDispatch}>+</button>
      <button onClick={handleDecrementDispatch}>-</button>
    </>
  );
}

export default Counter;
