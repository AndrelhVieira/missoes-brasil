import { Container, CarouselImage, DotButton, MissionaryText } from "./styles";
import { carouselImagesHomepage } from "providers/homepage";
import { COLORS } from "styles/global";

import Title from "components/Title";
import Button from "components/Button";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HowToBe = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 625 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 625, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomDot = ({ onClick, active }) => {
    return (
      <li>
        <DotButton
          style={{ background: active ? COLORS.green : "initial" }}
          onClick={() => onClick()}
        />
      </li>
    );
  };

  return (
    <>
      <Container>
        <Title>Trabalho Missionário</Title>
        <div>
          <Carousel
            additionalTransfrom={0}
            customDot={<CustomDot />}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            responsive={responsive}
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            showDots
            showArrow={false}
          >
            {carouselImagesHomepage.map((image, index) => (
              <CarouselImage
                src={image.image}
                key={index}
                alt={image.alt}
              ></CarouselImage>
            ))}
          </Carousel>
        </div>
        <MissionaryText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum earum
          quae illo eius a consectetur ipsam voluptas nihil blanditiis
          accusantium quis velit quod, laboriosam beatae obcaecati corrupti
          pariatur incidunt. Eius.
        </MissionaryText>
        <Button>Detalhes</Button>
      </Container>
    </>
  );
};

export default HowToBe;
