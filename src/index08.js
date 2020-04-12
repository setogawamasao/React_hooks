import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case "remove":
        // 削除対象以外の項目を保持する
        return state.filter((_, index) => index != action.index);
      default:
        return state;
    }
  }, []);

  // enter 押下で発火する
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <h1>input and press enter key</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(<ShoppingList />, document.querySelector("#root"));
