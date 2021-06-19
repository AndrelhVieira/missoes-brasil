import { ButtonStyled } from "./styles";

import { useHistory } from "react-router";

const Button = ({ linkTo, children }) => {
  const history = useHistory();

  const redirect = () => {
    history.push(linkTo);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ButtonStyled onClick={redirect}>{children}</ButtonStyled>
    </>
  );
};

export default Button;
