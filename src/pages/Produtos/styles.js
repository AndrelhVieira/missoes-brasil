import styled from "styled-components";

export const Container = styled.section`
  padding: 10px 20px;

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media screen and (min-width: 696px) {
      flex-direction: row;
    }
  }
`;

export const CardComingSoon = styled.h3`
  padding: 10px;
  text-align: center;
  margin: 25px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
