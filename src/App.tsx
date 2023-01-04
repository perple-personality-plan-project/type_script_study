import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetTodo from "./component/GetTodo";
import DeleteTodo from "./component/DeleteTodo";
import PostTodo from "./component/PostTodo";

function App() {
  return (
    <div>
      <PostTodo />
      {/* <GetTodo /> */}
    </div>
  );
}

export default App;
