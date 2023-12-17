import React from "react";
import * as S from "./styles/CategoryListContainer.styled";
import ListRow from "./ListRow";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CategoryContextMenu from "./CategoryContextMenu";
import { useTodoList } from "../../hook/useTodoList";

const CategoryListContainer = () => {
  const { categoryList } = useTodoList();

  const { isShow: isContextMenuShow, type: contextMenuType } = useSelector(
    (state: RootState) => state.contextMenu,
  );

  return (
    <S.Container>
      <S.CategoryContainer>
        {isContextMenuShow && contextMenuType === "category" && (
          <CategoryContextMenu />
        )}
        {categoryList?.map((category) => {
          return <ListRow key={category.id} category={category} />;
        })}
      </S.CategoryContainer>
    </S.Container>
  );
};

export default CategoryListContainer;
