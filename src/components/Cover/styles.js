import styled from "styled-components";

export const Container = styled.section`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
