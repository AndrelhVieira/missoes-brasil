import styled from "styled-components";
import { COLORS } from "styles/global";

import ListItemText from "@material-ui/core/ListItemText";

export const ListItemTextStyled = styled(ListItemText)`
  color: ${COLORS.black};
  text-align: center;
  padding: 0 10px;

  & span {
    font-family: "Jost", sans-serif;
    font-size: 1.25rem;
  }
`;

export const DivDrawerStyle = styled.div`
  height: 100vh;
  padding: 0;
  display: flex;
  align-items: center;
`;
