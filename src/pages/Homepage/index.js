import Menu from "components/Menu";
import CoverInicio from "components/CoverInicio";
import WhoWeAre from "components/WhoWeAre";
import Quote from "components/Quote";
import HowToBe from "components/HowToBe";
import Products from "components/Products";
import Footer from "components/Footer";

const PaginaInicial = () => {
  return (
    <>
      <Menu />
      <CoverInicio />
      <WhoWeAre />
      <HowToBe />
      <Quote />
      <Products />
      <Footer />
    </>
  );
};

export default PaginaInicial;
