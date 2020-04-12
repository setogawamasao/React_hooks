import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<App />, document.querySelector("#root"));

function App() {
  // stateを作成し、
  // 再レンダリングのトリガーとして使う
  const [random, setRandom] = useState(Math.random());

  // LifecycleDemoが表示/非表示のいずれであるかを
  // 記録するためにstateを作成する
  const [mounted, setMounted] = useState(true);

  // この関数は乱数を変更して
  // 再レンダリングを発火させる
  // （コンソール上でLifecycleDemoから「render!」が確認できる）
  const reRender = () => setRandom(Math.random());

  // この関数はLifecycleDemoをアンマウントして、再マウントするため
  // クリーンアップ関数が呼ばれていることを確認できる
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {/* 条件付きレンダー */}
      {mounted && <LifecycleDemo />}
    </>
  );
}

function LifecycleDemo() {
  // 関数を引数に取る
  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log("render!");

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log("unmounting...");
  });

  return "I'm a lifecycle demo";
}
