import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

export const CategoryContainer = styled.li`
  padding: 10px 20px 10px 20px;

  & > div {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }

  & input {
    margin-left: 5px;
    background: white;
    outline: none;
    border: 1px solid #868e96;
    height: 25px;
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    & {
      user-select: none;
    }
  }
`;
