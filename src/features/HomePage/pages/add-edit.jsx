import React from 'react';
import { useRouteMatch } from 'react-router';
// import PropTypes from "prop-types";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const match = useRouteMatch();
  console.log('Add- EDIT', match.path);
  return <div>{match.path === '/home/add' ? <h2>Add</h2> : <h2>Edit</h2>}</div>;
}

export default AddEditPage;
