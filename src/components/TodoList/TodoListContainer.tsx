import React from "react";
import * as S from "./styles/TodoListContainer.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TodoList from "./TodoList";
import { ITodo } from "../../redux/modules/selectedTodoListSlice";
import { addTodo } from "../../redux/modules/categorySlice";
import TodoContextMenu from "./TodoContextMenu";

const TodoListContainer = () => {
  const selectedCategory = useSelector((state: RootState) => state.todoList);
  const isContextMenuShow = useSelector(
    (state: RootState) => state.contextMenu.isShow,
  );
  const dispatch = useDispatch();

  let todoList: Array<ITodo> = [];
  let isDoneTodoList: Array<ITodo> = [];

  if (selectedCategory.todoList) {
    todoList = selectedCategory.todoList.filter((t) => !t.isDone);
    isDoneTodoList = selectedCategory.todoList.filter((t) => t.isDone);
  }

  // 작업 입력 이벤트
  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글 입력시 두번 이벤트 발생 감지
    if (event.nativeEvent.isComposing) {
      return;
    }

    if (event.key === "Enter") {
      let value = event.currentTarget.value;
      if (value === "") return;

      let index = 0;
      if (selectedCategory.todoList) {
        index = selectedCategory.todoList.length + 1;
      }
      dispatch(
        addTodo({
          content: value,
          index,
          isDone: false,
          parentId: selectedCategory.id ?? "",
          star: false,
        }),
      );
      event.currentTarget.value = "";
    }
  };

  return (
    <S.Container>
      <S.ShowMenuButton>➡️</S.ShowMenuButton>
      <>
        <header>
          <h1>{selectedCategory.name}</h1>
        </header>
        <S.TodoWrapper>
          <S.NotDoneContainer>
            {<TodoList todoList={todoList} />}
          </S.NotDoneContainer>
          {isDoneTodoList.length > 0 && (
            <S.IsDoneContainer>
              <h3>완료됨</h3>
              {<TodoList todoList={isDoneTodoList} />}
            </S.IsDoneContainer>
          )}
          {isContextMenuShow && <TodoContextMenu />}
        </S.TodoWrapper>
      </>
      <input placeholder="작업 추가" onKeyDown={handleKeydown} />
    </S.Container>
  );
};

export default TodoListContainer;