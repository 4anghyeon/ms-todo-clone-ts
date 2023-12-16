import { todoAxios } from "./axios-instance";
import { ITodo } from "../redux/modules/selectedTodoListSlice";

export const createTodo = async (todo: ITodo) => {
  await todoAxios.post("/todoList", { ...todo });
};

export const deleteTodo = async (id: string) => {
  await todoAxios.delete(`/todoList/${id}`);
};

export const updateBooleanTodo = async ({
  id,
  attr,
  value,
}: {
  id: string;
  attr: string;
  value: boolean;
}) => {
  await todoAxios.patch(`/todoList/${id}`, {
    [attr]: value,
  });
};
