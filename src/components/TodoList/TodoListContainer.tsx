import React from "react";
import * as S from "./styles/TodoListContainer.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TodoList from "./TodoList";
import { ITodo } from "../../redux/modules/selectedTodoListSlice";
import TodoContextMenu from "./TodoContextMenu";
import { useTodoList } from "../../hook/useTodoList";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

const TodoListContainer = () => {
  const selectedCategory = useSelector((state: RootState) => state.todoList);
  const { isShow: isContextMenuShow, type: contextMenuType } = useSelector(
    (state: RootState) => state.contextMenu,
  );
  const theme = useSelector((state: RootState) => state.theme);
  const { add } = useTodoList();

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

      add({
        id: uuidv4(),
        content: value,
        index,
        isDone: false,
        categoryId: selectedCategory.id ?? "",
        star: false,
      });

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
              <S.DoneHeader $theme={theme}>완료됨</S.DoneHeader>
              {<TodoList todoList={isDoneTodoList} />}
            </S.IsDoneContainer>
          )}
          {isContextMenuShow && contextMenuType === "todo" && (
            <TodoContextMenu />
          )}
        </S.TodoWrapper>
      </>
      {selectedCategory.type !== "star" &&
        selectedCategory.type !== "search" && (
          <input placeholder="작업 추가" onKeyDown={handleKeydown} />
        )}
    </S.Container>
  );
};

export default TodoListContainer;
