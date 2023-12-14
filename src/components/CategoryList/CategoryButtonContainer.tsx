import React from "react";
import * as S from "./styles/CategoryButtonContainer.styled";
import { useDispatch } from "react-redux";
import { addCategory } from "../../redux/modules/categorySlice";

const CategoryButtonContainer = () => {
  const dispatch = useDispatch();

  const onClickNewList = () => {
    dispatch(addCategory());
  };

  return (
    <S.Container>
      <button onClick={onClickNewList}>➕ 새 목록</button>
    </S.Container>
  );
};

export default CategoryButtonContainer;
