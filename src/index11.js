import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// ==========================================
// this code is  bad sample
// ==========================================

function Reddit() {
  // 記事一覧を保持するためにstateを初期化する
  const [posts, setPosts] = useState([]);

  // async関数を使ってfetchをawaitする
  useEffect(async () => {
    // いつも通りfetchを呼ぶ
    const res = await fetch("https://www.reddit.com/r/reactjs.json");

    // いつも通りデータを取得する
    const json = await res.json();

    // 記事一覧をstateに保存する
    // （ネットワークタブを見てなぜパスがこうなっているのか確認する）
    setPosts(json.data.children.map((c) => c.data));
  }); // <-- 値を渡さなかったことで何が起こる？

  // いつも通りレンダリングする
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<Reddit />, document.querySelector("#root"));
