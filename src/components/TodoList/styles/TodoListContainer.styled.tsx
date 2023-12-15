import styled from "styled-components";
import exp from "node:constants";
import { ThemeProps } from "../../Main/MainContainer.styled";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  position: relative;

  & h1 {
    margin: 0.67rem 0 0.67rem 20px;
    font-size: 2rem;
  }

  & input {
    margin: 20px;
    padding: 10px 10px 10px 20px;
    border-radius: 8px;
    font-size: 20px;
    border-color: transparent;
    background: #5466ae;
    color: white;
  }

  & input::placeholder {
    color: white;
    opacity: 1; /* Firefox */
  }
`;

export const TodoWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const NotDoneContainer = styled.section`
  justify-content: start;
`;

export const IsDoneContainer = styled.section`
  & div:first-child {
    text-decoration: line-through;
  }
`;

export const ShowMenuButton = styled.button`
  display: none;
  font-size: 1.2rem;
  border: none;
  color: #d4d4d5;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  background: rgba(191, 198, 208, 0.38);
  padding: 5px;
  border-radius: 5px;

  & img {
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    & {
      display: block;
    }
  }
`;

export const DoneHeader = styled.h3<ThemeProps>`
  margin: 10px 0 5px 10px;
  background: ${({ $theme }) => $theme.subHeaderBackground};
  color: white;
  border-radius: 10px;
  width: fit-content;
  font-size: 12px;
  padding: 10px;
`;
