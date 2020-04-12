import React from "react";
import { render } from "react-dom";

function OneTimeButton(props) {
  return <button onClick={props.onClick}>You Can Only Click Me Once</button>;
}

function sayHi() {
  console.log("yo");
}

render(<OneTimeButton onClick={sayHi} />, document.querySelector("#root"));
