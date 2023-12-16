import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../redux/modules/selectedTodoListSlice";
import {
  addTodo,
  checkTodo,
  ICategory,
  removeTodo,
  starTodo,
} from "../redux/modules/categorySlice";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import { TOP_CENTER } from "../options/toast-options";

export const useTodoList = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state: RootState) => state.category);

  const add = (todo: ITodo) => {
    dispatch(addTodo(todo));
    toast.success("추가 되었습니다", TOP_CENTER);
  };

  const remove = (todo: ITodo) => {
    dispatch(removeTodo({ categoryId: todo.categoryId, id: todo.id }));
  };

  const check = (todo: ITodo) => {
    dispatch(checkTodo({ categoryId: todo.categoryId, id: todo.id }));
  };

  const star = (todo: ITodo) => {
    dispatch(starTodo({ categoryId: todo.categoryId, id: todo.id }));
  };

  const findStaredList = () => {
    const staredList = categoryList
      .map((c) => c.todoList.filter((t) => t.star))
      .flat();

    const starCategory: ICategory = {
      name: "중요",
      id: "star",
      isEdit: false,
      todoList: staredList,
      type: "star",
    };

    return starCategory;
  };

  const findSearchList = (keyword: string) => {
    let searchList: Array<ITodo> = [];
    if (keyword.length > 0) {
      searchList = categoryList
        .map((c) => c.todoList)
        .flat()
        .filter((t) => t.content.includes(keyword));
    }

    const searchCategory: ICategory = {
      name: "검색결과",
      id: "search",
      isEdit: false,
      todoList: searchList,
      type: "search",
    };

    return searchCategory;
  };

  return {
    add,
    remove,
    check,
    star,
    findStaredList,
    findSearchList,
  };
};
