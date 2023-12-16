import React from "react";
import * as S from "./styles/SearchContainer.styled";
import { useDispatch } from "react-redux";
import { useTodoList } from "../../hook/useTodoList";
import { setSelectedTodoList } from "../../redux/modules/selectedTodoListSlice";

const SearchContainer = () => {
  const dispatch = useDispatch();
  const { findSearchList } = useTodoList();

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const findCategory = findSearchList(e.currentTarget.value);
    dispatch(setSelectedTodoList(findCategory));
  };

  return (
    <S.Container>
      <S.Icon>🔍</S.Icon>
      <input
        placeholder="검색"
        spellCheck={false}
        onChange={onChangeSearchInput}
      />
      <button>⬅️</button>
    </S.Container>
  );
};

export default SearchContainer;
