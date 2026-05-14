import { useSelector } from "react-redux";

function Container() {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <h2>Container</h2>
      <p>Counter : {count}</p>
    </>
  );
}

export default Container;
