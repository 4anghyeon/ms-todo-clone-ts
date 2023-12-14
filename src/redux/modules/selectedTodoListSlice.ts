import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "./categorySlice";

export interface ITodo {
  parentId: string;
  index: number;
  isDone: boolean;
  content: string;
  star: boolean;
}

const initialState: Partial<ICategory> = {};

const selectedTodoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setSelectedTodoList: (
      state,
      action: { type: string; payload: ICategory },
    ) => {
      return action.payload;
    },
  },
});

export const { setSelectedTodoList } = selectedTodoListSlice.actions;
export default selectedTodoListSlice.reducer;
