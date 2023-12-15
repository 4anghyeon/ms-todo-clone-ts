import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./selectedTodoListSlice";

export interface ICategory {
  id: string;
  isEdit: boolean;
  name: string;
  type: "normal" | "star";
  todoList: Array<ITodo>;
}

const LOCALSTORAGE_KEY = "to-do-app-data";
const initialState: Array<ICategory> = JSON.parse(
  localStorage.getItem(LOCALSTORAGE_KEY) ?? "[]",
);

const categorySlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addCategory: (state) => {
      // 기본 제목의 목록 혹은 그룹을 만든다.
      // 계속 만들 경우 index가 증가하여 생성된다.
      // 기본 목록의 id는 UUID로 생성된다.
      let defaultName = "제목 없는 목록";
      let index = 0;
      let filtered = state.filter((p) => p.name.indexOf(defaultName) !== -1);
      if (filtered.length > 0) {
        index +=
          +filtered[filtered.length - 1].name.replace(defaultName, "") + 1 || 1;
      }
      state.push({
        id: uuidv4(),
        name: `${defaultName} ${index === 0 ? "" : index}`.trim(),
        type: "normal",
        isEdit: false,
        todoList: [],
      });

      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
    },
    addTodo: (state, action: { type: string; payload: ITodo }) => {
      if (action.payload) {
        const find = state.find(({ id }) => id === action.payload.parentId);

        if (find) {
          find.todoList.push(action.payload);
          localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
        }
      }
    },
    removeTodo: (
      state,
      action: { type: string; payload: Pick<ITodo, "parentId" | "id"> },
    ) => {
      const { parentId, id } = action.payload;
      const findParent = state.find((s) => s.id === parentId);
      if (findParent) {
        findParent.todoList = findParent.todoList.filter((t) => t.id !== id);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
      }
    },
    starTodo: (
      state,
      action: { type: string; payload: Pick<ITodo, "parentId" | "id"> },
    ) => {
      const { parentId, id } = action.payload;
      const findParent = state.find((s) => s.id === parentId);
      if (findParent) {
        const find = findParent.todoList.find((t) => t.id === id);
        if (find) find.star = !find.star;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
      }
    },
    checkTodo: (
      state,
      action: { type: string; payload: Pick<ITodo, "parentId" | "id"> },
    ) => {
      const { parentId, id } = action.payload;
      const findParent = state.find((s) => s.id === parentId);
      if (findParent) {
        const find = findParent.todoList.find((t) => t.id === id);
        if (find) find.isDone = !find.isDone;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
      }
    },
  },
});

export const { addCategory, addTodo, removeTodo, checkTodo, starTodo } =
  categorySlice.actions;
export default categorySlice.reducer;
