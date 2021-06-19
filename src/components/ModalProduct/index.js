import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { ButtonStyled, ModalStyled, CardModal } from "./styles";

export default function TransitionsModal({ product }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonStyled type="button" onClick={handleOpen}>
        Detalhes
      </ButtonStyled>
      <ModalStyled
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <CardModal>
            <h2>{product.name}</h2>
            <cite>{product.owner}</cite>
            <div>
              <img src={product.image} alt="Imagem do produto" />
              <p>
                Meireles tem dedicado sua vida a estudar e escrever sobre o Islã
                e povos muçulmanos afim de cooperar com a igreja brasileira com
                obras literárias que sejam ferramentas para despetar o amor e
                envio de obreiros aos povos muçulmanos.
              </p>
            </div>
            <p>{product.price}</p>
            <ButtonStyled>
              <i class="fab fa-whatsapp"></i>
              Reserve já o seu!
            </ButtonStyled>
          </CardModal>
        </Fade>
      </ModalStyled>
    </div>
  );
}
