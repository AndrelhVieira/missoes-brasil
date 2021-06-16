import Menu from "components/Menu";
import Cover from "components/Cover";
import WhoWeAre from "components/WhoWeAre";
import Quote from "components/Quote";
import HowToBe from "components/HowToBe";
import Products from "components/Products";
import Footer from "components/Footer";

const Homepage = () => {
  return (
    <>
      <Menu />
      <Cover />
      <WhoWeAre />
      <HowToBe />
      <Quote />
      <Products />
      <Footer />
    </>
  );
};

export default Homepage;
