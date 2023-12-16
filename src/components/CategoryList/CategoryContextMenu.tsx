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
import Swal from "sweetalert2";
import { DELETE_OPTION } from "../../options/swal-options";
import { toast } from "react-toastify";
import { TOP_CENTER } from "../../options/toast-options";

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
        dispatch(hideContextMenu());
        Swal.fire(DELETE_OPTION).then((result) => {
          if (result.isConfirmed) {
            if (category) {
              dispatch(deleteCategory({ id: category.id }));
              toast.success("삭제되었습니다", TOP_CENTER);
            }
          }
        });
      },
    },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default CategoryContextMenu;
