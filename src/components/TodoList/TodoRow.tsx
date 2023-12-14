import React from "react";
import * as S from "./styles/TodoRow.styled";
import { CheckCircle, DoneCircle, Star, Stared } from "./styles/TodoRow.styled";
import { ITodo } from "../../redux/modules/selectedTodoListSlice";
import { useDispatch } from "react-redux";
import { checkTodo } from "../../redux/modules/categorySlice";
import { setContextMenu } from "../../redux/modules/contextMenuSlice";

const TodoRow = ({ todo }: { todo: ITodo }) => {
  const dispatch = useDispatch();

  const toggleTodoDone = () => {
    dispatch(checkTodo({ parentId: todo.parentId, index: todo.index }));
  };

  // 컨텍스트 메뉴 오픈
  const handleRightClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();

    dispatch(
      setContextMenu({
        isShow: true,
        type: "todo",
        x: event.clientX - rect.x,
        y: event.clientY - rect.y / 3,
      }),
    );
  };

  return (
    <S.Container onContextMenu={handleRightClick}>
      <div>
        {todo.isDone ? (
          <DoneCircle onClick={toggleTodoDone} />
        ) : (
          <CheckCircle onClick={toggleTodoDone} />
        )}
        <S.TodoContent>
          <span>{todo.content}</span>
        </S.TodoContent>
      </div>
      {todo.star ? <Stared /> : <Star />}
    </S.Container>
  );
};

export default TodoRow;
