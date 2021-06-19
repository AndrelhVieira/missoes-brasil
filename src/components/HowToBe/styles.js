import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 696px;
  margin: auto;

  & img {
    width: 100%;
    max-width: 396px;
    display: block;
    margin: auto;
    border: 3px solid ${COLORS.green};
  }

  @media screen and (min-width: 696px) {
    flex-direction: row;

    & div {
      min-width: 300px;
      max-width: 396px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & img {
      margin: 0;
    }
  }
`;

export const MissionaryText = styled.p`
  font-size: 1.25rem;
  text-align: justify;
  max-width: 396px;
  margin: 15px auto;
`;
