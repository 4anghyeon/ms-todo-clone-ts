import styled from "styled-components";
import { StyleType } from "../../styles/theme";

export type ThemeProps = {
  $theme: StyleType;
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: white;
  font-family: "IBM Plex Sans KR", serif;
`;

export const CenterBox = styled.main<ThemeProps>`
  display: flex;
  width: 1200px;
  height: calc(100% - 100px);
  max-width: 1200px;
  max-height: 800px;
  margin: 50px;
  border-radius: 15px;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: background-color 200ms;
  position: relative;

  background: ${({ $theme }) => $theme.background};
  h1 {
    color: ${({ $theme }) => $theme.headerColor};
  }
  h3 {
    color: ${({ $theme }) => $theme.subHeaderColor};
  }

  @media screen and (max-width: 768px) {
    & {
      margin: 0;
      border-radius: 0;
      height: 100%;
      overflow: hidden;
    }
  }
`;
