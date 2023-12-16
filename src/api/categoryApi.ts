import { todoAxios } from "./axios-instance";
import { ICategory } from "../redux/modules/categorySlice";

export const findAllTodos = async () => {
  const { data } = await todoAxios.get("/category?_embed=todoList");
  return data;
};

export const createCategory = async (category: ICategory) => {
  await todoAxios.post("/category", category);
};

export const removeCategory = async (id: string) => {
  await todoAxios.delete(`/category/${id}`);
};

export const updateCategoryName = async (id: string, name: string) => {
  await todoAxios.patch(`/category/${id}`, {
    name: name,
  });
};
