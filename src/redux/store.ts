import { configureStore } from "@reduxjs/toolkit";
import todoList from "./modules/selectedTodoListSlice";
import contextMenu from "./modules/contextMenuSlice";
import theme from "./modules/themeSlice";
import search from "./modules/searchSlice";

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { todoList, contextMenu, theme, search },
});

export default store;
