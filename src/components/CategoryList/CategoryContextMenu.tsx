import React from "react";
import ContextMenu, { IContextMenu } from "../Common/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  deleteCategory,
  editCategoryName,
  toggleEditCategory,
} from "../../redux/modules/categorySlice";
import { hideContextMenu } from "../../redux/modules/contextMenuSlice";

const CategoryContextMenu = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.contextMenu);

  const menuList: Array<IContextMenu> = [
    {
      content: "🔖 이름 변경",
      action: () => {
        if (category) {
          dispatch(toggleEditCategory({ id: category.id }));
        }
        dispatch(hideContextMenu());
      },
    },
    {
      content: "🗑️ 삭제",
      action: () => {
        if (category) {
          dispatch(deleteCategory({ id: category.id }));
        }
        dispatch(hideContextMenu());
      },
    },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default CategoryContextMenu;
