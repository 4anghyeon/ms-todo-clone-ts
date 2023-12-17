import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTodoList } from "../../redux/modules/selectedTodoListSlice";
import { RootState } from "../../redux/store";
import { useTodoList } from "../../hook/useTodoList";
import {
  IContextMenuInfo,
  setContextMenu,
} from "../../redux/modules/contextMenuSlice";
import { unFocusSearch } from "../../redux/modules/searchSlice";
import * as S from "./styles/ListRow.styled";
import { ICategory, useCategory } from "../../hook/useCategory";

type BlurEventType =
  | React.KeyboardEvent<HTMLInputElement>
  | React.FocusEvent<HTMLInputElement>;

const ListRow = ({ category }: { category: ICategory }) => {
  const selectedTodoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();
  const { findStaredList } = useTodoList();
  const { updateName } = useCategory();

  const onClickCategory = () => {
    dispatch(setSelectedTodoList(category));
    dispatch(unFocusSearch());
  };

  // 컨텍스트 메뉴 오픈
  const handleRightClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();

    const contextMenuInfo: IContextMenuInfo = {
      isShow: true,
      type: "category",
      todo: null,
      category: category,
      x: event.clientX - rect.x,
      y: event.clientY - rect.y / 3,
    };
    dispatch(setContextMenu(contextMenuInfo));
  };

  const handleBlur = (event: BlurEventType) => {
    // dispatch(
    //   // editCategory({ id: category.id, name: event?.currentTarget.value }),
    // );
    // const inputElem = document.getElementById(`input_${category.id}`);
    // if (inputElem) inputElem.style.display = "block";

    if (category?.id) {
      updateName({ id: category.id, name: event?.currentTarget.value });
    }

    const inputElem = document.getElementById(`input_${category.id}`);
    if (inputElem) {
      inputElem.style.display = "none";
    }

    const nameElem = document.getElementById(`name_${category.id}`);
    if (nameElem) nameElem.style.display = "block";
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleBlur(event);
  };

  useEffect(() => {
    if (selectedTodoList.type === "star") {
      const stared = findStaredList();
      dispatch(setSelectedTodoList(stared));
    } else dispatch(setSelectedTodoList(category));
  }, [category]);

  return (
    <S.Row onClick={onClickCategory} onContextMenu={handleRightClick}>
      <div id={`name_${category.id}`}>
        <span>📋</span> {category.name}
      </div>
      <input
        id={`input_${category.id}`}
        defaultValue={category.name}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus={true}
      />
      <span>{category.todoList.length}</span>
    </S.Row>
  );
};

export default ListRow;
