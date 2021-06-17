import { Container, CarouselImage, DotButton } from "./styles";

import Menu from "components/Menu";
import Cover from "components/Cover";
import Title from "components/Title";
import Footer from "components/Footer";

import Capa from "assets/carousel2.jpg";
import images from "providers/images";
import { COLORS } from "styles/global";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Imagens = () => {
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
      <Container>
        <Title>Imagens</Title>
        <p>Estas são algumas imagens de eventos missionários</p>
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
          {images.map((image, index) => (
            <CarouselImage
              src={image.image}
              key={index}
              alt={image.alt}
            ></CarouselImage>
          ))}
        </Carousel>
        {images.map((currentImage, index) => (
          <img
            src={currentImage.image}
            key={index}
            alt="Imagem de evento missionário"
          />
        ))}
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
          {images.map((image, index) => (
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

export default Imagens;
