import styled from "styled-components";

import { COLORS } from "styles/global";

export const CardDiv = styled.div`
  padding: 10px;
  text-align: center;
  border: 3px solid ${COLORS.white};

  & img {
    width: 100%;
  }

  & h3,
  p {
    margin: 10px;
  }

  & p {
    color: ${COLORS.green};
    font-size: 1rem;
    font-weight: bold;
  }
`;
