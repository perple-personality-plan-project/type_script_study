import React from "react";
import { useDispatch } from "react-redux";
import { __deleteTodo } from "../redux/modules/postsSlice";

function DeleteTodo({ postID }: { postID: number }) {
  const UseAppDispatch: any = () => useDispatch();

  const deleteTodo = () => {
    UseAppDispatch(__deleteTodo(postID));
  };

  return <button onClick={deleteTodo}>DeleteTodo</button>;
}

export default DeleteTodo;
