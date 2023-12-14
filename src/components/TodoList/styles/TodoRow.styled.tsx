import styled from "styled-components";
import exp from "node:constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 30px;
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
  border: 1px solid #868e96 !important;
  cursor: pointer;
`;

export const CheckCircle = styled(Circle)`
  background: white;
  color: white;
`;

export const DoneCircle = styled(Circle)`
  background: #5466ae;
  &::after {
    content: "✔";
    text-decoration: none !important;
  }
`;

export const Star = styled.div`
  &::after {
    content: "✩";
    font-size: 1.7rem;
    color: grey;
  }
`;

export const Stared = styled.div`
  &::after {
    content: "★";
    font-size: 1.5rem;
  }
`;
