import { Fragment, useState } from "react";
import "./App.css";
import Test2 from "./Test2";

const App = () => {
  const [count, setCount] = useState(0);
  const handleUp = () => {
    setCount((preCount) => preCount + 1);
  };
  const handleDown = () => {
    /**Kiểm tra để không có số âm */
    if (count > 0) {
      setCount((preCount) => preCount - 1);
    }
  };

  return (
    <Fragment>
      <Test2/>
      <h1>Number:{count}</h1>
      <button onClick={handleUp}>+</button>
      <button onClick={handleDown}>-</button>
    </Fragment>
  );
};

export default App;
