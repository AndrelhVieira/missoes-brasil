import { Container, TextAbout } from "./styles";

import Menu from "components/Menu";
import Cover from "components/Cover";
import Title from "components/Title";
import Footer from "components/Footer";

import Capa from "assets/capa_sobreNos.jpg";

import Foto1 from "assets/carousel1.jpg";

const SobreNos = () => {
  return (
    <>
      <Menu />
      <Cover image={Capa} />
      <Container>
        <Title>Sobre Nós</Title>
        <TextAbout>
          Somos missionários voluntários que trabalham para o Reino de Deus,
          cumprindo o <strong>IDE</strong> de JESUS, desenvolvendo atividades e
          projetos nas mais diversas áreas.
        </TextAbout>
        <img src={Foto1} alt="Imagem 1 da página sobre nós" />
        <TextAbout>
          Nosso proposito é transformar pessoas e levá-las a conhecer{" "}
          <strong>JESUS</strong>, dando a oportunidade de ter uma caminhada com
          bom testemunho, despertando sentimentos de amor pelo próximo, vontade
          de servir, conhecer a palavra de Deus e a alcançar nações.
        </TextAbout>
      </Container>
      <Footer />
    </>
  );
};

export default SobreNos;
