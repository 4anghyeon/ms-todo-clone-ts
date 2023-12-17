import { ITodo } from "../redux/modules/selectedTodoListSlice";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../App";
import { createTodo, deleteTodo, updateBooleanTodo } from "../api/todoApi";
import { ICategory, useCategory } from "./useCategory";

export const CATEGORY_KEY = "category";

export const useTodoList = () => {
  const { categoryList } = useCategory();

  const { mutate: add } = useMutation({
    mutationFn: async (todo: ITodo) => {
      await createTodo(todo);
    },
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] }),
  });

  const { mutate: remove } = useMutation({
    mutationFn: async (todo: ITodo) => {
      await deleteTodo(todo.id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] });
    },
  });

  const { mutate: check } = useMutation({
    mutationFn: async (todo: ITodo) => {
      await updateBooleanTodo({
        id: todo.id,
        attr: "isDone",
        value: !todo.isDone,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] });
    },
  });

  const { mutate: star } = useMutation({
    mutationFn: async (todo: ITodo) => {
      await updateBooleanTodo({
        id: todo.id,
        attr: "star",
        value: !todo.star,
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] });
    },
  });

  const findStaredList = () => {
    const staredList = categoryList
      ?.map((c) => c.todoList.filter((t) => t.star))
      .flat();

    const starCategory: ICategory = {
      name: "중요",
      id: "star",
      isEdit: false,
      todoList: staredList ?? [],
      type: "star",
    };

    return starCategory;
  };

  const findSearchList = (keyword: string) => {
    let searchList: Array<ITodo> = [];
    if (keyword.length > 0) {
      if (categoryList) {
        searchList = categoryList
          .map((c) => c.todoList)
          .flat()
          .filter((t) => t.content.includes(keyword));
      }
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
    categoryList,
    add,
    remove,
    check,
    star,
    findStaredList,
    findSearchList,
  };
};
