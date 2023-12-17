import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import { CATEGORY_KEY } from "./useTodoList";
import {
  createCategory,
  findAllTodos,
  removeCategory,
  updateCategoryName,
} from "../api/categoryApi";
import { toast } from "react-toastify";
import { TOP_CENTER } from "../options/toast-options";
import { ITodo } from "../redux/modules/selectedTodoListSlice";

export type CategoryType = "normal" | "star" | "search";

export interface ICategory {
  id?: string;
  isEdit: boolean;
  name: string;
  type: CategoryType;
  todoList: Array<ITodo>;
}

export const useCategory = () => {
  const { data: categoryList } = useQuery({
    queryKey: [CATEGORY_KEY],
    queryFn: findAllTodos,
  });

  const { mutate: add } = useMutation({
    mutationFn: async (category: ICategory) => {
      await createCategory(category);
    },
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] }),
  });

  const { mutate: remove } = useMutation({
    mutationFn: async (id: string) => {
      await removeCategory(id);
    },
    onSuccess: async () => {
      toast.success("삭제되었습니다", TOP_CENTER);
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] });
    },
  });

  const { mutate: updateName } = useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      await updateCategoryName(id, name);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [CATEGORY_KEY] });
    },
  });

  return {
    categoryList,
    add,
    remove,
    updateName,
  };
};
