import { Container } from "./styles";

import Menu from "components/Menu";
import Title from "components/Title";
import Footer from "components/Footer";
import ProductCard from "components/ProductCard";

import products from "providers/products";

const Produtos = () => {
  return (
    <>
      <Menu />
      <Container>
        <Title>Produtos</Title>
        {products.map((product, index) => (
          <ProductCard key={index} product={product}></ProductCard>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Produtos;
