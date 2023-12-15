import React from "react";
import ContextMenu, { IContextMenu } from "../Common/ContextMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTodoList } from "../../hook/useTodoList";

const TodoContextMenu = () => {
  const { todo } = useSelector((state: RootState) => state.contextMenu);
  const { remove } = useTodoList();

  const menuList: Array<IContextMenu> = [
    {
      content: "️✅ 완료로 표시",
      action: () => {},
    },
    { content: "⭐️ 중요로 표시", action: () => {} },
    {
      content: "🗑️ 삭제",
      action: () => {
        if (todo) remove(todo);
      },
    },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default TodoContextMenu;
