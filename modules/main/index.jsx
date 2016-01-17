import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const MainView = ({

}) => (
  <h1>Welcome to Castle of the Winds - Past Present Future</h1>
);

let MainContainer = connect(
)(MainView);

export default MainContainer;