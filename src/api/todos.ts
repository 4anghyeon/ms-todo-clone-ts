import { todoApi } from "./axios-instance";

export const findAllLetters = async () => {
  const { data } = await todoApi.get("/todos");
  return data;
};
