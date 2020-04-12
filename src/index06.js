// 最初に：reactからnamed exportされるuseStateをimportします
// このステップを省略して、React.useStateを使っても構いません
import React, { useState } from "react";
import ReactDOM from "react-dom";

function LoginForm() {
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

  const printValues = (e) => {
    e.preventDefault();
    console.log(form.username, form.password);
  };

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={printValues}>
      <label>
        Username:
        <input value={form.username} name="username" onChange={updateField} />
      </label>
      <br />
      <label>
        Password:
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.querySelector("#root"));
