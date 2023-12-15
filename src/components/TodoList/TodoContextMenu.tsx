import React from "react";
import ContextMenu, { IContextMenu } from "../Common/ContextMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTodoList } from "../../hook/useTodoList";
import { hideContextMenu } from "../../redux/modules/contextMenuSlice";
import { checkTodo } from "../../redux/modules/categorySlice";

const TodoContextMenu = () => {
  const { todo } = useSelector((state: RootState) => state.contextMenu);
  const { remove, star } = useTodoList();
  const dispatch = useDispatch();

  const menuList: Array<IContextMenu> = [
    {
      content: "️✅ 완료로 표시",
      action: () => {
        if (todo) {
          star(todo);
          dispatch(checkTodo(todo));
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
        if (todo) {
          remove(todo);
          dispatch(hideContextMenu());
        }
      },
    },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default TodoContextMenu;
