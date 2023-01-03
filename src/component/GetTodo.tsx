import axios from "axios";
import React, { useEffect, useState } from "react";

const GetTodo = () => {
  type todoPreset = {
    todo: string;
    id: string;
  };

  const [todos, setTodos] = useState<todoPreset[]>([
    { id: "1", todo: "hihi" },
    { id: "2", todo: "hihi2" },
    { id: "3", todo: "hihi3" },
    { id: "4", todo: "hihi4" },
  ]);
  //   const fetchData = async () => {
  //     const data = await axios.get("");
  //     setTodos(data.data);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const onClickDeleteHandler = (id: string) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div style={{ display: "flex" }}>
            <div key={todo.id}>{todo.todo}</div>
            <button onClick={() => onClickDeleteHandler(todo.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default GetTodo;
