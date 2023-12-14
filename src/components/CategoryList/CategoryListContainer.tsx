import React from "react";
import * as S from "./styles/CategoryListContainer.styled";
import ListRow from "./ListRow";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CategoryListContainer = () => {
  const categoryList = useSelector((state: RootState) => state.category);

  return (
    <S.Container>
      <S.CategoryContainer>
        {categoryList.map((category) => {
          return <ListRow key={category.id} category={category} />;
        })}
      </S.CategoryContainer>
    </S.Container>
  );
};

export default CategoryListContainer;
