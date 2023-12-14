import React from "react";
import TodoRow from "./TodoRow";
import { ITodo } from "../../redux/modules/selectedTodoListSlice";

const TodoList = ({ todoList }: { todoList: Array<ITodo> }) => {
  return (
    <>
      {todoList.map((todo) => {
        return <TodoRow key={todo.index} todo={todo} />;
      })}
    </>
  );
};

export default TodoList;
