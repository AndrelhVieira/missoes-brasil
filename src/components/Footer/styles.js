import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  background-color: ${COLORS.lightGreen};
  color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;

  & section {
    @media screen and (min-width: 696px) {
      display: flex;
      flex-direction: row-reverse;
      justify-items: center;
      align-items: center;
    }
  }
`;

export const LogoDiv = styled.div`
  text-align: center;
  margin: 10px;

  & img {
    width: 75%;
    max-width: 296px;
  }
`;

export const IconsDiv = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin: 10px;
  max-width: 396px;

  & a :link {
    text-decoration: none;
  }

  & i {
    margin: 0 15px 0;
    font-size: 3rem;
    color: ${COLORS.black};
  }
`;

export const AlvLogo = styled(LogoDiv)`
  & img {
    width: 35%;
  }
`;
