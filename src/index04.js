// 最初に：reactからnamed exportされるuseStateをimportします
// このステップを省略して、React.useStateを使っても構いません
import React, { useState } from "react";
import ReactDOM from "react-dom";

// このコンポーネントは2つのpropsを受け取ります：
//   text - 表示するテキスト
//   maxLength - 「もっと見る」の前に何文字表示するか
function LessText({ text, maxLength }) {
  // stateの小片を作成して初期値をtrueにします
  // hiddenはstateの現在の値で、
  // setHiddenによって変更可能です
  //
  const [hidden, setHidden] = useState(true);

  // テキストが十分に短ければ、ボタンの心配は無用です
  if (text <= maxLength) {
    return <span>{text}</span>;
  }

  // 開く/閉じるリンクによってテキストをレンダリング（短縮もしくはフル表示）します
  // リンクがクリックされると、hiddenの値が更新されて
  // 再レンダリングが行われます
  return (
    <span>
      {hidden ? `${text.substr(0, maxLength).trim()} ...` : text}
      {hidden ? (
        <a onClick={() => setHidden(false)}> read more</a>
      ) : (
        <a onClick={() => setHidden(true)}> read less</a>
      )}
    </span>
  );
}

ReactDOM.render(
  <LessText
    text={`Focused, hard work is the real key
      to success. Keep your eyes on the goal, 
      and just keep taking the next step 
      towards completing it.`}
    maxLength={35}
  />,
  document.querySelector("#root")
);
