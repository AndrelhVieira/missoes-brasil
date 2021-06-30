import styled from "styled-components";
import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 15px 10px;
  display: flex;
  justify-content: space-evenly;
  background-color: ${COLORS.lightGreen};
  color: ${COLORS.black};
  z-index: 1000;
  width: 100%;
  position: fixed;

  & img {
    width: 75%;
    max-width: 296px;
    cursor: pointer;
  }

  @media screen and (min-width: 992px) {
    justify-content: center;
  }

  & button {
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 2rem;

    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;

export const LateralMenu = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${COLORS.lightGreen};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    font-size: 2rem;
    font-family: "Jost", sans-serif;
    display: block;
    margin: 10px;
    cursor: pointer;
    color: ${COLORS.black};
    width: 100%;

    & :hover {
      transform: scale(1.2);
      transition: 0.25s;
    }
  }

  @media screen and (min-width: 992px) {
    display: flex;
  }
`;
