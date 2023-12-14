import React from "react";
import * as S from "./styles/StarCategoryContainer.styled";

const StarCategoryContainer = () => {
  return (
    <S.Container>
      <li className={`list-item`}>
        <S.StarHeader>
          <div>
            <S.StarIcon>✩</S.StarIcon>
            <span>중요</span>
          </div>
          <span>{7}</span>
        </S.StarHeader>
      </li>
      <hr />
    </S.Container>
  );
};

export default StarCategoryContainer;
