import styled from "styled-components";

type Props = {
  $x: number;
  $y: number;
};

export const ContextMenuShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ContextMenuContainer = styled.ul<Props>`
  position: absolute;
  top: ${({ $y }) => `${$y}px`};
  left: ${({ $x }) => `${$x}px`};
  border-radius: 10px;
  background: rgba(206, 212, 218, 0.95);
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  & li {
    padding: 5px 15px 5px 15px;
    cursor: pointer;
  }

  & li:hover {
    background: #1a83f0;
    color: white;
    border-radius: 5px;
  }
`;
