import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// ==========================================
// this code is  good sample + update
// ==========================================

ReactDOM.render(<App />, document.querySelector("#root"));

function App() {
  // 2つのstate：1つは入力値を保持する
  // もう1つは現在のsubredditを保持する
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);

  // ユーザーがエンターキーを押すとsubredditが更新される
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setValue(e.target.value)} />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

// 1. propsからsubredditを分割代入する
function Reddit({ subreddit }) {
  // 記事一覧を保持するためにstateを初期化する
  const [posts, setPosts] = useState([]);

  // async関数を使ってfetchをawaitする
  useEffect(async () => {
    // いつも通りfetchを呼ぶ
    // 2. URLを設定するためにテンプレートリテラルを使う
    const res = await fetch("https://www.reddit.com/r/reactjs.json");

    // いつも通りデータを取得する
    const json = await res.json();

    // 記事一覧をstateに保存する
    // （ネットワークタブを見てなぜパスがこうなっているのか確認する）
    setPosts(json.data.children.map((c) => c.data));
  }, [subreddit, setPosts]); // <-- 値を渡さなかったことで何が起こる？

  // いつも通りレンダリングする
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
