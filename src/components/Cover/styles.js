import styled from "styled-components";

import cover from "assets/mapa.jpg";

export const Container = styled.section`
  background-image: url(${cover});
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 2.5rem;
  }
`;
