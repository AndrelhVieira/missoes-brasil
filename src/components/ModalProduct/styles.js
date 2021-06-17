import styled from "styled-components";

import Modal from "@material-ui/core/Modal";

import { COLORS } from "styles/global";

export const ButtonStyled = styled.button`
  font-family: "Jost", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px;
  background-color: ${COLORS.green};
  border: 5px solid ${COLORS.green};
  color: ${COLORS.white};
  outline: none;
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  &:hover {
    background-color: ${COLORS.white};
    border: 5px solid ${COLORS.white};
    color: ${COLORS.green};
  }

  & i {
    font-size: 2rem;
  }
`;

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 75%;
  }

  & h2,
  p {
    margin: 10px;
  }

  & p {
    color: ${COLORS.green};
    font-size: 1.25rem;
    font-weight: bold;
  }
`;

export const CardModal = styled.div`
  outline: none;
  background-color: ${COLORS.black};
  text-align: center;
  padding: 10px;
  margin: 10px;
`;
