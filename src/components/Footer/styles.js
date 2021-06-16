import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  background-color: ${COLORS.white};
  color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoDiv = styled.div`
  text-align: center;
  margin: 10px;

  & img {
    width: 75%;
  }
`;

export const IconsDiv = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 10px;

  & i {
    margin: 0 15px 0;
    font-size: 3rem;
  }
`;
