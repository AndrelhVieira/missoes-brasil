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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum earum
            quae illo eius a consectetur ipsam voluptas nihil blanditiis
            accusantium quis velit quod, laboriosam beatae obcaecati corrupti
            pariatur incidunt. Eius.
          </MissionaryText>
          <Button>Detalhes</Button>
        </div>
      </Container>
    </>
  );
};

export default HowToBe;
