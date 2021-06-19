import { Container } from "./styles";
import TemporaryDrawer from "components/Drawer";
import Logo from "assets/logo.png";

import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const linkToHome = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container>
        <img src={Logo} alt="Logo de Missões Brasil" onClick={linkToHome} />
        <TemporaryDrawer />
      </Container>
    </>
  );
};

export default Menu;
