import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "./selectedTodoListSlice";
import {
  createCategory,
  removeCategory,
  updateCategoryName,
} from "../../api/categoryApi";
import { createTodo, deleteTodo, updateBooleanTodo } from "../../api/todoApi";

export type CategoryType = "normal" | "star" | "search";

export interface ICategory {
  id: string;
  isEdit: boolean;
  name: string;
  type: CategoryType;
  todoList: Array<ITodo>;
}

const initialState: Array<ICategory> = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    initTodos: (
      state,
      action: { type: string; payload: { data: Array<ICategory> } },
    ) => {
      return action.payload.data;
    },
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

      const newCategory: ICategory = {
        id: uuidv4(),
        name: `${defaultName} ${index === 0 ? "" : index}`.trim(),
        type: "normal",
        isEdit: false,
        todoList: [],
      };
      state.push(newCategory);
      createCategory(newCategory);
    },
    toggleEditCategory: (
      state,
      action: { type: string; payload: Pick<ICategory, "id"> },
    ) => {
      const find = state.find((s) => s.id === action.payload.id);
      if (find) find.isEdit = !find.isEdit;
    },
    editCategory: (
      state,
      action: { type: string; payload: { id: string; name: string } },
    ) => {
      const find = state.find((s) => s.id === action.payload.id);
      if (find) find.name = action.payload.name;
      updateCategoryName(action.payload.id, action.payload.name);
    },
    deleteCategory: (
      state,
      action: { type: string; payload: { id: string } },
    ) => {
      state = state.filter((s) => s.id !== action.payload.id);
      removeCategory(action.payload.id);
      return state;
    },
    addTodo: (state, action: { type: string; payload: any }) => {
      if (action.payload) {
        const find = state.find(({ id }) => id === action.payload.categoryId);
        if (find) {
          find.todoList.push(action.payload);
          createTodo(action.payload);
        }
      }
    },
    removeTodo: (
      state,
      action: { type: string; payload: Pick<ITodo, "categoryId" | "id"> },
    ) => {
      const { categoryId, id } = action.payload;
      const findParent = state.find((s) => s.id === categoryId);
      if (findParent) {
        findParent.todoList = findParent.todoList.filter((t) => t.id !== id);
        deleteTodo(id);
      }
    },
    starTodo: (
      state,
      action: { type: string; payload: Pick<ITodo, "categoryId" | "id"> },
    ) => {
      const { categoryId, id } = action.payload;
      const findParent = state.find((s) => s.id === categoryId);
      if (findParent) {
        const find = findParent.todoList.find((t) => t.id === id);
        if (find) {
          find.star = !find.star;
          updateBooleanTodo({ id, attr: "star", value: find.star });
        }
      }
    },
    checkTodo: (
      state,
      action: { type: string; payload: Pick<ITodo, "categoryId" | "id"> },
    ) => {
      const { categoryId, id } = action.payload;
      const findParent = state.find((s) => s.id === categoryId);
      if (findParent) {
        const find = findParent.todoList.find((t) => t.id === id);
        if (find) {
          find.isDone = !find.isDone;
          updateBooleanTodo({ id, attr: "isDone", value: find.isDone });
        }
      }
    },
  },
});

export const {
  initTodos,
  addCategory,
  toggleEditCategory,
  editCategory,
  deleteCategory,
  addTodo,
  removeTodo,
  checkTodo,
  starTodo,
} = categorySlice.actions;
export default categorySlice.reducer;
