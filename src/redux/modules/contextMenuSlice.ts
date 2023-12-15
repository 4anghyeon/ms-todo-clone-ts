import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "./selectedTodoListSlice";
import { ICategory } from "./categorySlice";

export interface IContextMenu {
  isShow: boolean;
  type: "category" | "todo";
  todo: ITodo | null;
  category: ICategory | null;
  x: number;
  y: number;
}

const initialState: IContextMenu = {
  isShow: false,
  type: "category",
  todo: null,
  category: null,
  x: 0,
  y: 0,
};

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState,
  reducers: {
    setContextMenu: (
      state,
      action: { type: string; payload: IContextMenu },
    ) => {
      return action.payload;
    },
    hideContextMenu: (state) => {
      state.isShow = false;
    },
  },
});

export const { setContextMenu, hideContextMenu } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;
