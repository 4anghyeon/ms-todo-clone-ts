import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  position: relative;

  & h1 {
    margin-left: 20px;
  }

  & input {
    margin: 20px;
    height: 30px;
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
  display: flex;
  flex-direction: column;
  justify-content: start;
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
