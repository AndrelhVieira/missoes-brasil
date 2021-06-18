import styled from "styled-components";

import { COLORS } from "styles/global";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1.25rem;
  font-family: "Jost", sans-serif;
  outline: none;
  border: 3px solid ${COLORS.green};
  margin: 10px 0;
  background-color: transparent;
  border: 2px solid ${COLORS.green};
  outline: none;
  cursor: pointer;
  width: 100%;
  max-width: 496px;
  color: ${COLORS.white};

  &:hover {
    box-shadow: 1px 1px 10px ${COLORS.green};
    transition: 0.25s;
  }

  &:focus {
    box-shadow: 1px 1px 25px ${COLORS.green};
    transition: 0.25s;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 1.25rem;
  font-family: "Jost", sans-serif;
  border: 2px solid ${COLORS.green};
  outline: none;
  background-color: transparent;
  margin: 10px 0;
  width: 100%;
  max-width: 496px;
  resize: none;
  color: ${COLORS.white};
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 10px ${COLORS.green};
    transition: 0.25s;
  }

  &:focus {
    box-shadow: 1px 1px 25px ${COLORS.green};
    transition: 0.25s;
  }
`;

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

  &:hover {
    background-color: ${COLORS.white};
    border: 5px solid ${COLORS.white};
    color: ${COLORS.green};
  }
`;
