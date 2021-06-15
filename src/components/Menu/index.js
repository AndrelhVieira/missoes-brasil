import { Container, MenuStyled } from "./styles";
import Logo from "assets/logo.png";

import { useState } from "react";

const Menu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleActiveMenu = () => {
    setMenuActive(!menuActive);
  };

  const menuItems = [
    { itemName: "Início" },
    { itemName: "Quem somos" },
    { itemName: "Como ser Missionário" },
    { itemName: "Produtos" },
    { itemName: "Imagens" },
    { itemName: "Contato" },
  ];

  return (
    <>
      <Container>
        <img src={Logo} alt="Logo de Missões Brasil" />
        <button onClick={handleActiveMenu}>
          <i class="fas fa-bars"></i>
        </button>
      </Container>
      <MenuStyled>
        {menuActive &&
          menuItems.map((item, key) => <li key={key}>{item.itemName}</li>)}
      </MenuStyled>
    </>
  );
};

export default Menu;
