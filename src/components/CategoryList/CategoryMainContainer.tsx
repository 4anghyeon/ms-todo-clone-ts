import React from "react";
import SearchContainer from "./SearchContainer";
import * as S from "./styles/CategoryMainContainer.styled";
import StarCategoryContainer from "./StarCategoryContainer";
import CategoryListContainer from "./CategoryListContainer";
import CategoryButtonContainer from "./CategoryButtonContainer";

const CategoryMainContainer = () => {
  return (
    <S.Container>
      {/* 1. 검색 */}
      <SearchContainer />
      {/* 2. 중요 */}
      <StarCategoryContainer />
      {/* 3. 목록  */}
      <CategoryListContainer />
      {/* 4. 목록 추가 버튼 */}
      <CategoryButtonContainer />
    </S.Container>
  );
};

export default CategoryMainContainer;
