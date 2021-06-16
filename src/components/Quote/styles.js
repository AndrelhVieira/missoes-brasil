import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  text-align: center;
  background-color: ${COLORS.green};
  color: ${COLORS.black};
  font-family: "Cinzel", serif;

  & p {
    font-size: 1.2rem;
  }
`;

export const DividerImage = styled.img`
  width: 90%;
  display: block;
  margin: auto;
`;

export const GlobalImage = styled(DividerImage)``;
