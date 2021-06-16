import styled from "styled-components";
import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 15px 10px;
  display: flex;
  justify-content: space-around;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  position: fixed;
  z-index: 1000;

  & img {
    max-width: 75%;
  }

  & button {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 2rem;
  }
`;
