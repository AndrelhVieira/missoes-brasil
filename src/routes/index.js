import { Switch, Route } from "react-router-dom";

import PaginaInicial from "pages/Homepage";
import SobreNos from "pages/SobreNos";
import Missionario from "pages/Missionario";
import Produtos from "pages/Produtos";
import Imagens from "pages/Imagens";
import Contato from "pages/Contato";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route exact path="/sobre-nos" component={SobreNos} />
        <Route exact path="/como-ser-missionario" component={Missionario} />
        <Route exact path="/produtos" component={Produtos} />
        <Route exact path="/imagens" component={Imagens} />
        <Route exact path="/contato" component={Contato} />
      </Switch>
    </>
  );
};

export default Routes;
