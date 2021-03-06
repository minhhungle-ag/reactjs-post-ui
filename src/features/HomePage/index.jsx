import React from 'react';
// import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from 'react-router';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import AddEditPage from './pages/add-edit';

HomeFeature.propTypes = {};

function HomeFeature(props) {
  const match = useRouteMatch();
  console.log(match.path);
  return (
    <div>
      <Switch>
        <Route path={match.path} component={Home} exact />
        <Route path={`${match.path}/detail-page`} component={DetailPage} />
        <Route path={`${match.path}/add`} component={AddEditPage} />
        <Route path={`${match.path}/edit`} component={AddEditPage} />
      </Switch>
    </div>
  );
}

export default HomeFeature;
