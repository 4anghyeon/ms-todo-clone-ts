import React from "react";
import ContextMenu, { IContextMenu } from "../Common/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { hideContextMenu } from "../../redux/modules/contextMenuSlice";
import Swal from "sweetalert2";
import { DELETE_OPTION } from "../../options/swal-options";
import { useCategory } from "../../hook/useCategory";

const CategoryContextMenu = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state: RootState) => state.contextMenu);
  const { remove } = useCategory();

  const menuList: Array<IContextMenu> = [
    {
      content: "🔖 이름 변경",
      action: () => {
        if (category) {
          const inputElem = document.getElementById(`input_${category.id}`);
          if (inputElem) {
            inputElem.style.display = "block";
            inputElem.focus();
          }

          const nameElem = document.getElementById(`name_${category.id}`);
          if (nameElem) nameElem.style.display = "none";
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
            if (category?.id) {
              remove(category.id);
            }
          }
        });
      },
    },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default CategoryContextMenu;
