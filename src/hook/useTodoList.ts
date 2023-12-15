import { useDispatch } from "react-redux";
import { ITodo } from "../redux/modules/selectedTodoListSlice";
import {
  addTodo,
  checkTodo,
  removeTodo,
  startTodo,
} from "../redux/modules/categorySlice";

export const useTodoList = () => {
  const dispatch = useDispatch();

  const add = (todo: ITodo) => {
    dispatch(
      addTodo({
        content: todo.content,
        index: todo.index,
        isDone: false,
        parentId: todo.parentId,
        star: false,
      }),
    );
  };

  const remove = (todo: ITodo) => {
    dispatch(removeTodo({ parentId: todo.parentId, index: todo.index }));
  };

  const check = (todo: ITodo) => {
    dispatch(checkTodo({ parentId: todo.parentId, index: todo.index }));
  };

  const star = (todo: ITodo) => {
    dispatch(startTodo({ parentId: todo.parentId, index: todo.index }));
  };

  return { add, remove, check, star };
};
