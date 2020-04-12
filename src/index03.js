// useStateフックをimportする必要があります：
// （またはReact.useStateを書きます）
import React, { useState } from "react";
import { render } from "react-dom";

function OneTimeButton(props) {
  // 新しいstateを作成します。
  // 独自の更新関数が付属しています！
  const [clicked, setClicked] = useState(false);

  // ボタンクリックをコールバックprop呼び出しと
  // ボタン無効化で処理する必要があります。
  function doClick() {
    props.onClick();
    setClicked(true);
  }

  // このパートはほぼ同じですが、
  // thisがない分だけすっきりしています。
  return (
    <button onClick={clicked ? undefined : doClick} disabled={clicked}>
      You Can Only Click Me Once
    </button>
  );
}

function sayHi() {
  console.log("yo");
}

render(<OneTimeButton onClick={sayHi} />, document.querySelector("#root"));
