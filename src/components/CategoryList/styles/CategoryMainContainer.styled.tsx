import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  border-radius: 15px 0 0 15px;
  background: rgb(223, 224, 224);
  max-width: 70%;
  transition:
    max-width 0.1s,
    overflow 0s;
  z-index: 2;

  @media screen and (max-width: 768px) {
    & {
      position: absolute;
      height: 100%;
      width: 50vw;
      max-width: 0;
      overflow: hidden;
      border-radius: 0 10px 10px 0;
    }
  }
`;
