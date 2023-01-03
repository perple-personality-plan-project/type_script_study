import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialstate {
  posts: {};
  isLoading: boolean;
  error: any;
}

const initialState: initialstate = {
  posts: {},
  isLoading: false,
  error: null,
};

//본문 추가하기  Thunk
export const __postTodos: any = createAsyncThunk(
  "postTodos",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://heetemp.shop/api/post/",
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const __deleteTodo: any = createAsyncThunk(
  "getPostsStatics",
  async (payload: number, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://heetemp.shop/api/post/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      alert(`getPostsStaticsError: ${e}`);
    }
  }
);

export const __getTodo: any = createAsyncThunk(
  "getPostsStatics",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("https://heetemp.shop/api/post/");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      alert(`getPostsStaticsError: ${e}`);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
