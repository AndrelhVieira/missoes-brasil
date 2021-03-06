import styled from "styled-components";

import { COLORS } from "styles/global";

export const ButtonStyled = styled.button`
  font-family: "Jost", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px;
  background-color: ${COLORS.green};
  border: 5px solid ${COLORS.green};
  color: ${COLORS.white};
  outline: none;
  transition: 0.25s;
  max-width: 396px;
  display: block;
  margin: auto;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.black};
    border: 5px solid ${COLORS.black};
    color: ${COLORS.green};
  }
`;
