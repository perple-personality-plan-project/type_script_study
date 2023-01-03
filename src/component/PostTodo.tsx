import React, { useState } from "react";
// import {} from ''

const PostTodo = () => {
  interface todoPreset {
    id: number;
    title: string;
    content: string;
  }

   //서버에 저장된 todo가져오기
   useEffect(() => {
    dispatch(__postTodos());
  }, [dispatch]);

  const [todos, setTodos] = useState<todoPreset[]>([
    { id: 1, title: "실전프로젝트1", content: "타입스크립트" },
    { id: 2, title: "실전프로젝트2", content: "타입스크립트" },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      content: content,
    };
    setTodos([...todos, newTodo]);
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
        <div className="wrapper">
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                {todo.title},{todo.content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostTodo;
