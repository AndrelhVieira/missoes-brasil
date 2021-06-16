import styled from "styled-components";

import { COLORS } from "styles/global";

export const Container = styled.section`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
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

export const MissionaryText = styled.p`
  font-size: 1.25rem;
  text-align: justify;
`;
