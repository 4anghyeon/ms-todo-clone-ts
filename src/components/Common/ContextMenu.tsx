import React from "react";
import * as S from "./styles/ContextMenu.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { hideContextMenu } from "../../redux/modules/contextMenuSlice";

export interface IContextMenu {
  content: string;
  action: Function;
}

// @ts-ignore
const ContextMenu = ({ menuList }: { menuList: Array<IContextMenu> }) => {
  const { x, y } = useSelector((state: RootState) => state.contextMenu);
  const dispatch = useDispatch();

  // context menu 바깥쪽 클릭할 경우 닫힘
  const onClickShadow = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(hideContextMenu());
  };

  return (
    <>
      <S.ContextMenuShadow onClick={onClickShadow}></S.ContextMenuShadow>
      <S.ContextMenuContainer $x={x} $y={y}>
        {menuList.map((li) => {
          return <li key={li.content}>{li.content}</li>;
        })}
      </S.ContextMenuContainer>
    </>
  );
};

export default ContextMenu;
