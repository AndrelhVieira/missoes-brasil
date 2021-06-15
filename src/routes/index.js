import { Switch, Route } from "react-router-dom";

import Homepage from "pages/Homepage";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/quem-somos" />
        <Route exact path="/como-ser-missionario" />
        <Route exact path="/produtos" />
        <Route exact path="/imagens" />
        <Route exact path="/contato" />
      </Switch>
    </>
  );
};

export default Routes;
