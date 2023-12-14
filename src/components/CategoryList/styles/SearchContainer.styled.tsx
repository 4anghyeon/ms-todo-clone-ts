import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
  position: relative;

  & input {
    width: 100%;
    height: 100%;
    padding: 5px 5px 5px 35px;
    border-radius: 5px;
    border: none;
    background: #d4d5d6;
    box-shadow: #c4cacc 0 0 0 1px;
    font-size: 1rem;
  }

  & button {
    display: none;
    background: transparent;
    width: 40px;
    font-size: 1.2rem;
    margin-left: 20px;
    border: none;
    color: #868e96;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    & button {
      display: block;
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  left: 30px;
`;
