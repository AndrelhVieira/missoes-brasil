import styled from "styled-components";
import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 15px 10px;
  display: flex;
  justify-content: space-around;
  background-color: ${COLORS.white};
  color: ${COLORS.black};

  & img {
    max-width: 75%;
  }

  & button {
    outline: none;
    border: none;
    background-color: transparent;
  }

  & i {
    font-size: 2.5rem;
    color: ${COLORS.black};
  }
`;

export const MenuStyled = styled.ul`
  list-style: none;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  margin: 0;
  padding: 5px;
  text-align: center;

  & li {
    padding: 5px;
  }
`;
