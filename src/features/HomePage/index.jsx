import React from "react";
// import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

HomeFeature.propTypes = {};

function HomeFeature(props) {
  const match = useRouteMatch();
  console.log(match.path);
  return (
    <div>
      <Switch>
        <Route path={match.path} component={Home} exact />
        <Route path={`${match.path}/:id`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default HomeFeature;
