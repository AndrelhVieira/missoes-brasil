import { Container, LogoDiv, IconsDiv } from "./styles";

import Logo from "assets/logo.png";
import alv from "assets/alv-logo.png";

const Footer = () => {
  return (
    <>
      <Container>
        <IconsDiv>
          <p>Acompanhe nosso trabalho em nossas redes sociais:</p>
          <div>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </IconsDiv>
        <LogoDiv>
          <p>Desenvolvido por:</p>
          <img src={alv} />
        </LogoDiv>
        <LogoDiv>
          <img src={Logo} />
        </LogoDiv>
        <p>&copy; Todos os direitos reservados</p>
      </Container>
    </>
  );
};

export default Footer;
