import React from "react";
import * as S from "./styles/CategoryButtonContainer.styled";
import { ICategory, useCategory } from "../../hook/useCategory";

const CategoryButtonContainer = () => {
  const { categoryList, add } = useCategory();

  const onClickNewList = () => {
    // 기본 제목의 목록 혹은 그룹을 만든다.
    // 계속 만들 경우 index가 증가하여 생성된다.
    // 기본 목록의 id는 UUID로 생성된다.
    let defaultName = "제목 없는 목록";
    let index = 0;

    if (categoryList) {
      let filtered = categoryList.filter(
        (p) => p.name.indexOf(defaultName) !== -1,
      );
      if (filtered.length > 0) {
        index +=
          +filtered[filtered.length - 1].name.replace(defaultName, "") + 1 || 1;
      }
    }

    const newCategory: ICategory = {
      name: `${defaultName} ${index === 0 ? "" : index}`.trim(),
      type: "normal",
      isEdit: false,
      todoList: [],
    };

    add(newCategory);
  };

  return (
    <S.Container>
      <button onClick={onClickNewList}>➕ 새 목록</button>
    </S.Container>
  );
};

export default CategoryButtonContainer;
