import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";

const App = () => {
  return (
    <Switch>
      <Suspense fallback="Loader">
        <Route
          exact
          path={routes.HomePage.path}
          component={routes.HomePage.component}
        />
        {/* <Route
          path={routes.FavouritePage.path}
          component={routes.FavouritePage.component}
        /> */}
      </Suspense>
    </Switch>
  );
};

export default App;
