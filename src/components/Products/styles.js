import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 20px;
  text-align: center;
  margin-bottom: 25px;

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 696px;
    margin: auto;

    @media screen and (min-width: 696px) {
      flex-direction: row;
    }
  }

  & p {
    font-size: 1.5rem;
    text-align: justify;
    max-width: 396px;
    margin: 10px;
  }

  & div {
    & img {
      width: 100%;
      max-width: 296px;
    }

    & h4 {
      margin: 10px;
    }
  }
`;
