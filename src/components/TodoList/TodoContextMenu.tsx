import React from "react";
import ContextMenu, { IContextMenu } from "../Common/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTodoList } from "../../hook/useTodoList";
import { hideContextMenu } from "../../redux/modules/contextMenuSlice";
import Swal from "sweetalert2";
import { DELETE_OPTION } from "../../options/swal-options";
import { toast } from "react-toastify";
import { TOP_CENTER } from "../../options/toast-options";

const TodoContextMenu = () => {
  const { todo } = useSelector((state: RootState) => state.contextMenu);
  const { remove, star } = useTodoList();
  const dispatch = useDispatch();
  const { check } = useTodoList();

  const menuList: Array<IContextMenu> = [
    {
      content: "️✅ 완료로 표시",
      action: () => {
        if (todo) {
          check(todo);
          dispatch(hideContextMenu());
        }
      },
    },
    {
      content: "⭐️ 중요로 표시",
      action: () => {
        if (todo) {
          star(todo);
          dispatch(hideContextMenu());
        }
      },
    },
    {
      content: "🗑️ 삭제",
      action: () => {
        dispatch(hideContextMenu());
        Swal.fire(DELETE_OPTION).then((result) => {
          if (result.isConfirmed) {
            if (todo) {
              remove(todo);
              dispatch(hideContextMenu());
              toast.success("삭제되었습니다", TOP_CENTER);
            }
          }
        });
      },
    },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default TodoContextMenu;
