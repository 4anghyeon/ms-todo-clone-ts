import { createSlice } from "@reduxjs/toolkit";
import { ICategory } from "./categorySlice";

export interface ITodo {
  categoryId: string;
  id: string;
  index: number;
  isDone: boolean;
  content: string;
  star: boolean;
}

const initialState: ICategory = {
  id: "star",
  isEdit: false,
  name: "중요",
  type: "star",
  todoList: [],
};

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
