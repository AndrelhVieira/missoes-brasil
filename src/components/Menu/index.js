import { Container, LateralMenu } from "./styles";
import TemporaryDrawer from "components/Drawer";
import Logo from "assets/logo.png";

import menuItems from "providers/menuItems";

import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const linkToHome = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  const goTo = (path) => {
    history.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container>
        <img src={Logo} alt="Logo de Missões Brasil" onClick={linkToHome} />
        <TemporaryDrawer />
        <LateralMenu>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goTo(item.link)}
              title={item.text}
            >
              {item.icon}
            </button>
          ))}
        </LateralMenu>
      </Container>
    </>
  );
};

export default Menu;
