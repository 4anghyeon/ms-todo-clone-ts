import { configureStore } from "@reduxjs/toolkit";
import category from "./modules/categorySlice";
import todoList from "./modules/selectedTodoListSlice";
import contextMenu from "./modules/contextMenuSlice";
import theme from "./modules/themeSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { category, todoList, contextMenu, theme },
});

export default store;
