import styled from "styled-components";
import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  z-index: 1000;
  width: -webkit-fill-available;
  position: fixed;

  & img {
    width: 75%;
    max-width: 296px;
    cursor: pointer;
  }

  & button {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 2rem;
  }
`;
