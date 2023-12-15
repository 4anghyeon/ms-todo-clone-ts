import React, { useEffect } from "react";
import * as S from "./styles/StarCategoryContainer.styled";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTodoList } from "../../redux/modules/selectedTodoListSlice";
import { RootState } from "../../redux/store";
import { ICategory, starTodo } from "../../redux/modules/categorySlice";
import { useTodoList } from "../../hook/useTodoList";

const StarCategoryContainer = () => {
  const dispatch = useDispatch();
  const { findStaredList } = useTodoList();

  const starCategory = findStaredList();

  const onClickCategory = () => {
    dispatch(setSelectedTodoList(starCategory));
  };

  return (
    <S.Container>
      <li className={`list-item`} onClick={onClickCategory}>
        <S.StarHeader>
          <div>
            <S.StarIcon>✩</S.StarIcon>
            <span>중요</span>
          </div>
          <span>{starCategory.todoList.length}</span>
        </S.StarHeader>
      </li>
      <hr />
    </S.Container>
  );
};

export default StarCategoryContainer;
