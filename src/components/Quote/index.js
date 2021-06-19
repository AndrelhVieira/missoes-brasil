import { Container, Image } from "./styles";

import divider from "assets/divider.svg";
import global from "assets/global.png";

const Quote = () => {
  return (
    <>
      <Container>
        <section>
          <div>
            <Image
              src={global}
              alt="Imagem de um globo com as nações"
              className="infinite-rotate"
            />
          </div>
          <div>
            <p>
              E disse-lhes: <strong>Ide</strong> por todo o mundo e pregai o
              evangelho a toda criatura.
            </p>
            <h4>Marcos 16:15 - ARA</h4>
            <Image src={divider} alt="Image de um divisor" />
          </div>
        </section>
      </Container>
    </>
  );
};

export default Quote;
