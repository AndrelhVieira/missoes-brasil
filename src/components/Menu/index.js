import { Container } from "./styles";
import TemporaryDrawer from "components/Drawer";
import Logo from "assets/logo.png";

import menuItems from "providers/menuItems";

const Menu = () => {
  return (
    <>
      <Container>
        <img src={Logo} alt="Logo de Missões Brasil" />
        <TemporaryDrawer />
      </Container>
    </>
  );
};

export default Menu;
