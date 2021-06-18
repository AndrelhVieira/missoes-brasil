import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 25px;

  & p {
    font-size: 1.5rem;
  }

  & div {
    margin: 25px 10px;

    & img {
      width: 100%;
      max-width: 296px;
    }

    & h4 {
      margin: 10px;
    }
  }
`;
