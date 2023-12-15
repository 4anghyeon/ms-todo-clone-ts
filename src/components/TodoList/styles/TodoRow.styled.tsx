import styled from "styled-components";
import { ThemeProps } from "../../Main/MainContainer.styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 50px;
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  border-color: transparent;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start !important;
  align-items: start !important;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid lightgrey !important;
  cursor: pointer;
`;

export const CheckCircle = styled(Circle)<ThemeProps>`
  background: white;
  color: white;
`;

export const DoneCircle = styled(Circle)<ThemeProps>`
  background: ${({ $theme }) => $theme.subHeaderBackground};
  &::after {
    content: "✔";
    text-decoration: none !important;
    color: white;
  }
`;

export const Star = styled.div<ThemeProps>`
  &::after {
    content: "✩";
    font-size: 1.7rem;
    color: grey;
  }
`;

export const Stared = styled.div<ThemeProps>`
  &::after {
    content: "★";
    font-size: 1.7rem;
    color: ${({ $theme }) => $theme.subHeaderBackground};
  }
`;
