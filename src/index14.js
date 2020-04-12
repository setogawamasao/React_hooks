import React from "react";
import ReactDOM from "react-dom";

// ==========================================
// this code is not useContext
// ==========================================

// Contextを生成する
const NumberContext = React.createContext();
// 2つの値を持つオブジェクトを返す
// { Provider, Consumer }

function App() {
  // Providerを活用して値を全ての
  // 子要素と孫要素に利用可能にする
  return (
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  // Consumerを活用してcontextから取得した値を使う
  // このコンポーネントはpropsを取らないことに注意！
  return (
    <NumberContext.Consumer>
      {(value) => <div>The answer is {value}.</div>}
    </NumberContext.Consumer>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
