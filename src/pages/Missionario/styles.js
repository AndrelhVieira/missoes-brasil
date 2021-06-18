import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  max-width: 696px;
  margin: auto;

  & h2 {
    text-align: center;
    margin: 10px;
  }
`;

export const TextAbout = styled.p`
  font-size: 1.5rem;
  text-align: justify;
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

export const Image = styled.img`
  width: 100%;
`;
