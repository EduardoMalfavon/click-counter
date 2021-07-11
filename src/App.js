import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [err, setErr] = useState("");

  const onDecrement = () => {
    if (count - 1 < 0) {
      setErr(`Counter can't be negative numbers`);
    } else {
      setCount(count - 1);
    }
  };

  const onIncrement = () => {
    if (err !== "") {
      setErr("");
      setCount(count + 1);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        Esta es una prueba "The counter is currently&nbsp;"
        <span data-test="count">{count}</span>
      </h1>
      {err !== "" && <span>{err}</span>}
      <button data-test="increment-button" onClick={() => onIncrement()}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={() => onDecrement()}>
        Decrement counter
      </button>
    </div>
  );
}

export default App;
