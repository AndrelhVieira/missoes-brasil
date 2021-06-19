import { Container } from "./styles";
import Livro from "assets/CapaLivroMundoIsla.png";

import Title from "components/Title";
import Button from "components/Button";

const Products = () => {
  return (
    <>
      <Container>
        <Title>Produtos</Title>
        <h2>Confira nossos produtos disponíveis</h2>
        <section>
          <div>
            <img src={Livro} alt="Imagem do livro 'O mundo do islã'" />
            <h4>Livro "O Mundo do Islã"</h4>
          </div>
          <div>
            <p>
              Meireles tem dedicado sua vida a estudar e escrever sobre o Islã e
              povos muçulmanos afim de cooperar com a igreja brasileira com
              obras literárias que sejam ferramentas para despetar o amor e
              envio de obreiros aos povos muçulmanos.
            </p>
          </div>
        </section>
        <Button linkTo="/produtos">Ver produtos</Button>
      </Container>
    </>
  );
};

export default Products;
