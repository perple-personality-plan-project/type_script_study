import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { __getTodo } from "../redux/modules/postsSlice";
import DeleteTodo from "./DeleteTodo";

const GetTodo = () => {
  const todos = useSelector((state: any) => state.posts.postInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  return (
    <div>
      {todos.map((todo: any) => {
        return (
          <div style={{ display: "flex" }}>
            <div key={todo.id}>{todo.todo}</div>
            <DeleteTodo postID={todo.id} />
          </div>
        );
      })}
    </div>
  );
};

export default GetTodo;
