import { Container } from "./styles";

import Title from "components/Title";
import Button from "components/Button";

const WhoWeAre = () => {
  return (
    <>
      <Container>
        <Title>Sobre Nós</Title>
        <p>
          Somos missionários voluntários que trabalham para o Reino de Deus,
          cumprindo o <strong>IDE</strong> de JESUS, desenvolvendo atividades e
          projetos nas mais diversas áreas.
        </p>
        <Button linkTo="/sobre-nos">Saiba Mais</Button>
      </Container>
    </>
  );
};
export default WhoWeAre;
