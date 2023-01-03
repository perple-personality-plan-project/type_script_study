import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface initialstate {
  posts: any;
  post: any;
  isLoading: boolean;
  error: any;
}

const initialState: initialstate = {
  posts: [],
  post: [],
  isLoading: false,
  error: null,
};

export const __deleteTodo = createAsyncThunk(
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

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;
