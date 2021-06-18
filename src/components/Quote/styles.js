import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  text-align: center;
  background-color: ${COLORS.green};
  color: ${COLORS.black};
  font-family: "Cinzel", serif;
  display: flex;
  justify-content: center;

  & section {
    max-width: 696px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 696px) {
      flex-direction: row-reverse;

      & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 396px;
        margin: auto;

        & img {
          margin: 10px;
        }
      }
    }
  }
`;

export const Image = styled.img`
  width: 75%;
  display: block;
  margin: auto;
  max-width: 396px;
`;
