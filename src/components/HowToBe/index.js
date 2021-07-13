import { Container, MissionaryText } from "./styles";

import Title from "components/Title";
import Button from "components/Button";

import FotoMissionaria from "assets/carousel1.jpg";

import "react-multi-carousel/lib/styles.css";

const HowToBe = () => {
  return (
    <>
      <Title>Trabalho Missionário</Title>
      <Container>
        <div>
          <img src={FotoMissionaria} alt="Imagem de trabalho missionário" />
        </div>
        <div>
          <MissionaryText>
            Desenvolver projetos que estejam ligadas as áreas sociais,
            religiosas, humanísticas que alcancem pessoas que carecem de
            assistência médica, que necessitam de suporte espiritual,
            atendimento humanitário, bem como projetos relacionados ao ensino.
          </MissionaryText>
          <Button linkTo="/como-ser-missionario">Detalhes</Button>
        </div>
      </Container>
    </>
  );
};

export default HowToBe;
