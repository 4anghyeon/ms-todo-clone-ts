import React, { useEffect } from "react";
import { ICategory } from "../../redux/modules/categorySlice";
import { useDispatch } from "react-redux";
import { setSelectedTodoList } from "../../redux/modules/selectedTodoListSlice";

const ListRow = ({ category }: { category: ICategory }) => {
  const dispatch = useDispatch();

  const onClickCategory = () => {
    dispatch(setSelectedTodoList(category));
  };

  useEffect(() => {
    dispatch(setSelectedTodoList(category));
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
