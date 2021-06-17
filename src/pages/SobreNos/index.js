import { Container, TextAbout } from "./styles";

import Menu from "components/Menu";
import Cover from "components/Cover";
import Title from "components/Title";
import Footer from "components/Footer";

import Capa from "assets/capa_sobreNos.jpg";

const SobreNos = () => {
  return (
    <>
      <Menu />
      <Cover image={Capa} />
      <Container>
        <Title>Sobre Nós</Title>
        <TextAbout>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima
          ipsa voluptatum, saepe natus cumque repudiandae cum dolorum vitae
          delectus eius distinctio labore, quas pariatur officia voluptatem,
          assumenda fugit unde!
        </TextAbout>
        <TextAbout>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima
          ipsa voluptatum, saepe natus cumque repudiandae cum dolorum vitae
          delectus eius distinctio labore, quas pariatur officia voluptatem,
          assumenda fugit unde!
        </TextAbout>
      </Container>
      <Footer />
    </>
  );
};

export default SobreNos;
