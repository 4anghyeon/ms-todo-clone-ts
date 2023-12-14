import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  & div {
    display: flex;
    align-items: center;
  }

  & li {
    padding: 10px 20px 10px 20px;
  }

  & hr {
    border-color: #dee2e6;
    border-width: 0.05rem;
    margin: 5px 0 5px 0;
  }
`;

export const StarHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StarIcon = styled.span`
  margin-right: 5px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #ac395d;
`;
