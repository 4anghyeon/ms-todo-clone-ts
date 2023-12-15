import React, { useEffect } from "react";
import { ICategory } from "../../redux/modules/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTodoList } from "../../redux/modules/selectedTodoListSlice";
import { RootState } from "../../redux/store";
import { useTodoList } from "../../hook/useTodoList";

const ListRow = ({ category }: { category: ICategory }) => {
  const selectedTodoList = useSelector((state: RootState) => state.todoList);
  const dispatch = useDispatch();
  const { findStaredList } = useTodoList();

  const onClickCategory = () => {
    dispatch(setSelectedTodoList(category));
  };

  useEffect(() => {
    if (selectedTodoList.type === "star") {
      const stared = findStaredList();
      dispatch(setSelectedTodoList(stared));
    } else dispatch(setSelectedTodoList(category));
  }, [category]);

  return (
    <div onClick={onClickCategory}>
      <div>
        <span>📋</span> {category.name}
      </div>
      <span>{category.todoList.length}</span>
    </div>
  );
};

export default ListRow;
