import { Container } from "./styles";

import bolivian from "assets/bolivian.jpg";
import burqa from "assets/burqa.jpg";
import african from "assets/african.jpg";
import indios from "assets/indios.jpeg";

const PeopleImages = () => {
  const ImagesCard = [
    {
      image: bolivian,
    },
    {
      image: burqa,
    },
    {
      image: african,
    },
    {
      image: indios,
    },
  ];

  return (
    <>
      <Container>
        <div>
          {ImagesCard.map((card, index) => (
            <img
              src={card.image}
              key={index}
              alt="Imagens de povos pelo mundo"
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default PeopleImages;
