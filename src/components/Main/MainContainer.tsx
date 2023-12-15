import React from "react";
import * as S from "./MainContainer.styled";
import CategoryMainContainer from "../CategoryList/CategoryMainContainer";
import TodoListContainer from "../TodoList/TodoListContainer";

const MainContainer = () => {
  return (
    <S.Container>
      <S.CenterBox>
        {/* Left Side */}
        <CategoryMainContainer />
        {/* Right Side */}
        <TodoListContainer />
      </S.CenterBox>
    </S.Container>
  );
};

export default MainContainer;
