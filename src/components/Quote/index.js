import { Container, DividerImage, GlobalImage } from "./styles";

import divider from "assets/divider.svg";
import global from "assets/global.png";

const Quote = () => {
  return (
    <>
      <Container>
        <GlobalImage src={global} alt="Imagem de um globo com as nações" />
        <p>
          Então ele disse: — Vão pelo mundo inteiro e anunciem o evangelho a
          todas as pessoas.
        </p>
        <h4>Marcos 16:15 - NTLH</h4>
        <DividerImage src={divider} alt="Image de um divisor" />
      </Container>
    </>
  );
};

export default Quote;
