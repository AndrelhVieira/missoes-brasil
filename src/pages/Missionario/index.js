import {
  Container,
  TextAbout,
  CarouselImage,
  DotButton,
  Image,
} from "./styles";

import Menu from "components/Menu";
import Cover from "components/Cover";
import Title from "components/Title";
import Footer from "components/Footer";

import Capa from "assets/capa_missoes.jpg";
import Image1 from "assets/carousel1.jpg";
import Image2 from "assets/carousel2.jpg";
import { carouselImagesHomepage } from "providers/homepage";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { COLORS } from "styles/global";

const Missionario = () => {
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
      <Menu />
      <Cover image={Capa} />
      <Title>Como ser Missionário</Title>
      <Container>
        <h2>Como é ser Missionário</h2>
        <TextAbout>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima
          ipsa voluptatum, saepe natus cumque repudiandae cum dolorum vitae
          delectus eius distinctio labore, quas pariatur officia voluptatem,
          assumenda fugit unde!
        </TextAbout>
        <Image src={Image1} alt="Imagem 1 de trabalho missionário" />
        <h2>O que é ser Missionário</h2>
        <TextAbout>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia minima
          ipsa voluptatum, saepe natus cumque repudiandae cum dolorum vitae
          delectus eius distinctio labore, quas pariatur officia voluptatem,
          assumenda fugit unde!
        </TextAbout>
        <Image src={Image2} alt="Imagem 2 de trabalho missionário" />
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
      </Container>
      <Footer />
    </>
  );
};

export default Missionario;
