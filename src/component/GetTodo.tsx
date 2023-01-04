import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { __getTodo } from "../redux/modules/postsSlice";
import DeleteTodo from "./DeleteTodo";

const GetTodo = () => {
  const { posts } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  return (
    <div>
      hihi
      {posts &&
        posts.map((todo: any) => {
          return (
            <div key={todo.postId}>
              <div>{todo.postId}</div>
              <div>{todo.title}</div>
              <div>{todo.content}</div>
            </div>
          );
        })}
    </div>
  );
};

export default GetTodo;
