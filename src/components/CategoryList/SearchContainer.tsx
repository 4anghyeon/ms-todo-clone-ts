import React from "react";
import * as S from "./styles/SearchContainer.styled";

const SearchContainer = () => {
  return (
    <S.Container>
      <S.Icon>🔍</S.Icon>
      <input placeholder="검색" spellCheck={false} />
      <button>⬅️</button>
    </S.Container>
  );
};

export default SearchContainer;
