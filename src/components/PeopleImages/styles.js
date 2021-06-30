import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 20px;
  text-align: center;

  & div {
    display: flex;
    flex-wrap: wrap;
    max-width: 696px;
    margin: auto;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    & img {
      width: 100%;
      max-width: 325px;
      height: 250px;
      object-fit: cover;
      margin: 10px;
      border-radius: 10px;
    }
  }
`;
