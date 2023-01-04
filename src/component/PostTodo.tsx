import React, { useState } from "react";
import { __postTodos, __getTodo } from "../redux/modules/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import {} from ''
interface todoPreset {
  id: number;
  title: string;
  content: string;
}

interface postPreset {
  postId: number;
  title: string;
  content: string;
  createdAt?: string;
}

const PostTodo = () => {
  const { posts } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  console.log(posts);

  //서버에 저장된 todo가져오기

  const [todos, setTodos] = useState<todoPreset[]>([
    { id: 1, title: "실전프로젝트1", content: "타입스크립트" },
    { id: 2, title: "실전프로젝트2", content: "타입스크립트" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  const addHandler = () => {
    dispatch(__postTodos({ title, content }));
    // const newTodo = {
    //   id: todos.length + 1,
    //   title: title,
    //   content: content,
    // };
    // setTodos([...todos, newTodo]);
  };

  return (
    <div>
      PostTodo
      <div>
        제목: <input value={title} onChange={(e) => setTitle(e.target.value)} />
        내용:
        <input value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={addHandler}>추가하기</button>
      </div>
      <div>
        {posts.map((post: postPreset) => {
          return (
            <div key={post.postId}>
              {post.title},{post.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostTodo;
