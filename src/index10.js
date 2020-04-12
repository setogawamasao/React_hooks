import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.querySelector("#root"));

function App() {
  // 入力用DOMノードへの参照を保持する
  const inputRef = useRef();

  // 入力値をstateに保持する
  const [value, setValue] = useState("");

  useEffect(
    () => {
      // 初回レンダリング後に実行されるため、
      // refは今このタイミングで設定される
      console.log("render");
      // inputRef.current.focus();
    },
    // 副作用はinputRefに依存する
    [inputRef]
  );

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
