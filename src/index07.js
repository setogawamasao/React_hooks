import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";

function Counter() {
  // 初回のレンダリングでstateが生成されますが、
  // その値は未来のレンダリングにも引き継がれます
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  return (
    <>
      {sum}

      <button onClick={() => dispatch(1)}>Add 1</button>
    </>
  );
}

ReactDOM.render(<Counter />, document.querySelector("#root"));
