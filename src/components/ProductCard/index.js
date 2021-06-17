import { CardDiv } from "./styles";

import TransitionsModal from "components/ModalProduct";

const ProductCard = ({ product }) => {
  return (
    <>
      <CardDiv>
        <img src={product.image} alt="Imagem de um produto" />
        <h3>{product.name}</h3>
        <p>Por apenas {product.price}</p>
        <TransitionsModal product={product} />
      </CardDiv>
    </>
  );
};

export default ProductCard;
