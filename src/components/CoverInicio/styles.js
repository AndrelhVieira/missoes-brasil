import styled from "styled-components";

import cover from "assets/brazilFlag.gif";

export const Container = styled.section`
  background-image: url(${cover});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  s & h1 {
    font-size: 2.5rem;
  }
`;
