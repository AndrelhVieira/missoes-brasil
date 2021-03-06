import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  max-width: 696px;
  margin: auto;

  & img {
    width: 100%;
    max-width: 396px;
    display: block;
    margin: auto;
    border: 3px solid ${COLORS.green};
  }
`;

export const TextAbout = styled.p`
  font-size: 1.5rem;
  text-align: justify;
`;
