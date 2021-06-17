import { Container } from "./styles";
import Livro from "assets/CapaLivroMundoIsla.png";

import Title from "components/Title";
import Button from "components/Button";

const Products = () => {
  return (
    <>
      <Container>
        <Title>Produtos</Title>
        <p>Confira nossos produtos disponíveis</p>
        <div>
          <img src={Livro} alt="Imagem do livro 'O mundo do islã'" />
          <h4>Livro "O Mundo do Islã"</h4>
        </div>
        <Button>Ver produtos</Button>
      </Container>
    </>
  );
};

export default Products;
