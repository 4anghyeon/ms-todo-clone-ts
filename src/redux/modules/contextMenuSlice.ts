import { createSlice } from "@reduxjs/toolkit";

export interface IContextMenu {
  isShow: boolean;
  type: "category" | "todo";
  x: number;
  y: number;
}

const initialState: IContextMenu = {
  isShow: false,
  type: "category",
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
      console.log(action.payload);
      return action.payload;
    },
    hideContextMenu: (state) => {
      state.isShow = false;
    },
  },
});

export const { setContextMenu, hideContextMenu } = contextMenuSlice.actions;
export default contextMenuSlice.reducer;