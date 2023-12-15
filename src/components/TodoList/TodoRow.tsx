import React from "react";
import * as S from "./styles/TodoRow.styled";
import { CheckCircle, DoneCircle, Star, Stared } from "./styles/TodoRow.styled";
import { ITodo } from "../../redux/modules/selectedTodoListSlice";
import { useDispatch, useSelector } from "react-redux";
import { setContextMenu } from "../../redux/modules/contextMenuSlice";
import { useTodoList } from "../../hook/useTodoList";
import { RootState } from "../../redux/store";

const TodoRow = ({ todo }: { todo: ITodo }) => {
  const { check, star } = useTodoList();
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  // 컨텍스트 메뉴 오픈
  const handleRightClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();

    dispatch(
      setContextMenu({
        isShow: true,
        type: "todo",
        todo,
        category: null,
        x: event.clientX - rect.x,
        y: event.clientY - rect.y / 3,
      }),
    );
  };

  return (
    <S.Container onContextMenu={handleRightClick}>
      <div>
        {todo.isDone ? (
          <DoneCircle onClick={check.bind(null, todo)} $theme={theme} />
        ) : (
          <CheckCircle onClick={check.bind(null, todo)} $theme={theme} />
        )}
        <S.TodoContent>
          <span>{todo.content}</span>
        </S.TodoContent>
      </div>
      {todo.star ? (
        <Stared onClick={star.bind(null, todo)} $theme={theme} />
      ) : (
        <Star onClick={star.bind(null, todo)} $theme={theme} />
      )}
    </S.Container>
  );
};

export default TodoRow;
