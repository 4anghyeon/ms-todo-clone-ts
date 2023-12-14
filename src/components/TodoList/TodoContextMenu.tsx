import React from "react";
import ContextMenu, { IContextMenu } from "../Common/ContextMenu";

const TodoContextMenu = () => {
  const menuList: Array<IContextMenu> = [
    { content: "️✅ 완료로 표시", action: () => {} },
    { content: "⭐️ 중요로 표시", action: () => {} },
    { content: "🗑️ 삭제", action: () => {} },
  ];

  return <ContextMenu menuList={menuList} />;
};

export default TodoContextMenu;
