import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import cotw from '../enums/enums';
import * as actions from '../actions';

const Game = ({
  state
}) => (
  <div>
    <h1>New game!</h1>
    <p>
      Some stuff!!!
      <span>testing!</span>
    </p>
  </div>


);

let GameContainer = connect(
  (state) => {
    return {
      game: state
    }
  },
  (dispatch) => {
    return {}
  }
)(Game);

export default GameContainer;