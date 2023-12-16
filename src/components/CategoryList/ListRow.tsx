import React, { useEffect } from "react";
import {
  editCategory,
  ICategory,
  toggleEditCategory,
} from "../../redux/modules/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTodoList } from "../../redux/modules/selectedTodoListSlice";
import { RootState } from "../../redux/store";
import { useTodoList } from "../../hook/useTodoList";
import { setContextMenu } from "../../redux/modules/contextMenuSlice";
import { unFocusSearch } from "../../redux/modules/searchSlice";

const ListRow = ({ category }: { category: ICategory }) => {
  const selectedTodoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();
  const { findStaredList } = useTodoList();

  const onClickCategory = () => {
    dispatch(setSelectedTodoList(category));
    dispatch(unFocusSearch());
  };

  // 컨텍스트 메뉴 오픈
  const handleRightClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const rect = event.currentTarget.getBoundingClientRect();

    dispatch(
      setContextMenu({
        isShow: true,
        type: "category",
        todo: null,
        category: category,
        x: event.clientX - rect.x,
        y: event.clientY - rect.y / 3,
      }),
    );
  };

  const handleBlur = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>,
  ) => {
    dispatch(
      editCategory({ id: category.id, name: event?.currentTarget.value }),
    );
    dispatch(toggleEditCategory({ id: category.id }));
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
    <div onClick={onClickCategory} onContextMenu={handleRightClick}>
      <div>
        {!category.isEdit && (
          <>
            <span>📋</span> {category.name}
          </>
        )}
        {category.isEdit && (
          <input
            defaultValue={category.name}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus={true}
          />
        )}
      </div>
      <span>{category.todoList.length}</span>
    </div>
  );
};

export default ListRow;
