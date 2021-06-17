import { Container } from "./styles";

import Menu from "components/Menu";
import Cover from "components/Cover";
import Title from "components/Title";
import ContactForm from "components/ContactForm";
import Footer from "components/Footer";

import Capa from "assets/capa_contato.jpg";

const Contato = () => {
  return (
    <>
      <Menu />
      <Cover image={Capa} />
      <Title>Contato</Title>
      <Container>
        <p>Entre em contato conosco preenchendo com suas informações</p>
        <ContactForm />
      </Container>
      <Footer />
    </>
  );
};

export default Contato;
