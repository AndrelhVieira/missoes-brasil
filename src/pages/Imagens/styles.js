import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  text-align: center;
  font-size: 1.5rem;
  max-width: 696px;
  margin: auto;

  & p {
    margin: 10px;
  }

  & img {
    width: 100%;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 15px;
  object-fit: cover;
`;

export const DotButton = styled.button`
  border: 1px solid ${COLORS.green};
  background-color: red;
  height: 7px;
  margin: 3px;
  outline: none;
`;
