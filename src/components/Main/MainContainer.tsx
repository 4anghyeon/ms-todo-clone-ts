import React, { useEffect } from "react";
import * as S from "./MainContainer.styled";
import CategoryMainContainer from "../CategoryList/CategoryMainContainer";
import TodoListContainer from "../TodoList/TodoListContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { THEME } from "../../styles/theme";
import { setTheme } from "../../redux/modules/themeSlice";
import { findAllLetters } from "../../api/todos";
import { initTodos } from "../../redux/modules/categorySlice";

const MainContainer = () => {
  const selectedTodoList = useSelector((state: RootState) => state.todoList);
  const theme = useSelector((state: RootState) => state.theme);
  const { focus } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTodoList.type === "search") {
      dispatch(setTheme(THEME.SEARCH_THEME));
    } else if (selectedTodoList.type === "star") {
      dispatch(setTheme(THEME.STAR_THEME));
    } else {
      dispatch(setTheme(THEME.NORMAL_THEME));
    }
  }, [selectedTodoList, focus]);

  useEffect(() => {
    findAllLetters().then((data) => {
      dispatch(initTodos({ data }));
    });
  }, []);

  return (
    <S.Container>
      <S.CenterBox $theme={theme}>
        {/* Left Side */}
        <CategoryMainContainer />
        {/* Right Side */}
        <TodoListContainer />
      </S.CenterBox>
    </S.Container>
  );
};

export default MainContainer;
